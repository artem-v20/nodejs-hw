import { Note } from '../models/note.js';
import createHttpError from 'http-errors';

export const getAllNotes = async (req, res) => {
  const { page, perPage, sortBy, sortOrder, tag, search } = req.query;
  const skip = (page - 1) * perPage;

  const notesQuery = Note.find();

  if (tag) {
    notesQuery.where('tag').equals(tag);
  }

  if (search) {
    notesQuery.where({ $text: { $search: search } });
  }

  const [totalItems, notes] = await Promise.all([
    notesQuery.clone().countDocuments(),
    notesQuery
      .skip(skip)
      .limit(perPage)
      .sort({ [sortBy]: sortOrder }),
  ]);

  const totalPages = Math.ceil(totalItems / perPage);

  res.json({
    page,
    perPage,
    totalItems,
    totalPages,
    notes,
  });
};

export const getNoteById = async (req, res, next) => {
  const { noteId } = req.params;
  const note = await Note.findById(noteId);

  if (!note) {
    throw createHttpError(404, 'Note not found');
  }

  res.json(note);
};

export const createNote = async (req, res) => {
  const result = await Note.create(req.body);

  res.status(201).json(result);
};

export const deleteNote = async (req, res) => {
  const { noteId } = req.params;
  const result = await Note.findByIdAndDelete(noteId);
  if (!result) throw createHttpError(404, 'Note not found');

  res.json(result);
};

export const updateNote = async (req, res) => {
  const { noteId } = req.params;
  const result = await Note.findByIdAndUpdate(noteId, req.body, {
    new: true,
  });
  if (!result) throw createHttpError(404, 'Note not found');

  res.json(result);
};
