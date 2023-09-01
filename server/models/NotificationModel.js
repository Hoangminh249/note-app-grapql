import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    content: {
      type: String,
    },
    
  },
  { timestamps: true }
);

// timestamps tu them createAt , updatedAt

const NotificationModel = mongoose.model("Notification", notificationSchema);
export default NotificationModel;
