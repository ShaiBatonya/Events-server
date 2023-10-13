const Note = require('../models/Note');

module.exports = {
    getAllNotes: async (req,res)=>{
        try {

            const notes = await Note.find().exec();

            return res.status(200).json({
                success:true,
                message:"success to get all notes",
                notes
            })
            
        } catch (error) {
            return res.status(500).json({
                message:"error in get all notes request",
                error:error.message
            })
        }
    },
    addNewNote:async (req,res)=>{

        try {
            const { title, text, location, organizer} = req.body;

            const newNote = new Note({
                title,
                text,
                location,
                organizer
            });

            await newNote.save();

            return res.status(200).json({
                success:true,
                message:"success to add new note"
            })
            
        } catch (error) {
            return res.status(500).json({
                message:"error in add new note request",
                error:error.message
            })
        }
    },
    editNote: async (req,res)=>{
        try {

            const { id } = req.params;

            await Note.findByIdAndUpdate(id,req.body);

            return res.status(200).json({
                success:true,
                message:"success to edit note"
            })
            
        } catch (error) {
            return res.status(500).json({
                message:"error in edit note request",
                error:error.message
            })
        }
    },
    deleteNote: async (req,res)=>{
        try {

            const { id } = req.params;

            await Note.findByIdAndDelete(id);

            return res.status(200).json({
                success:true,
                message:"success to delete note"
            })
            
        } catch (error) {
            return res.status(500).json({
                message:"error in delete note request",
                error:error.message
            })
        }
    },
    getNoteById : async (req,res)=>{
        try {

            const {id} = req.params

            const note = await Note.findById(id).exec();

            return res.status(200).json({
                success:true,
                message:"success to get note by id",
                note
            })
            
        } catch (error) {
            return res.status(500).json({
                message:"error in get note by id",
                error:error.message
            })
        }
    },
}