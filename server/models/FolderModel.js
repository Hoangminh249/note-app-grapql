import mongoose from "mongoose";

const folderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    authorId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// timestamps tu them createAt , updatedAt

const FolderModel = mongoose.model("Folder", folderSchema);
export default FolderModel;
