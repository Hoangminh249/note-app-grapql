import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    content: {
      type: Sting,
    },
    folderId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// timestamps tu them createAt , updatedAt

const NoteModel = mongoose.model("Note", noteSchema);
export default NoteModel;
