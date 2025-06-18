import { Server, Socket } from "socket.io";

interface JoinRoomPayload {
  roomId: string;
}

interface SendMessagePayload {
  roomId: string;
  message: string;
}

export const setupSocket = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    console.log("🔌 New client connected:", socket.id);

    socket.on("join-room", ({ roomId }: JoinRoomPayload) => {
      socket.join(roomId);
      console.log(`User ${socket.id} joined room ${roomId}`);
    });

    socket.on("send-message", ({ roomId, message }: SendMessagePayload) => {
      io.to(roomId).emit("receive-message", {
        message,
        sender: socket.id,
      });
    });

    socket.on("disconnect", () => {
      console.log("❌ Client disconnected:", socket.id);
    });
  });
};
