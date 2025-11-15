const { Server } = require("socket.io");

let io;

function initSocket(server) {
    io = new Server(server, {
        cors: { origin: "*" }
    });

    io.on("connection", (socket) => {
        console.log("New user connected", socket.id);

        socket.on("joinRoom", ({ roomId }) => {
            socket.join(roomId);
        });

        socket.on("sendMessage", (message) => {
            io.to(message.roomId).emit("newMsg", message);
        });

        socket.on("disconnect", () => {
            console.log("User disconnected", socket.id);
        });
    });

    return io;
}

function getIo() {
    if (!io) throw new Error("Socket.io not initialized!");
    return io;
}

module.exports = { initSocket, getIo };
