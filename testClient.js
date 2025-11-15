const { io } = require("socket.io-client");


const socket = io("http://localhost:5000");

const groupId = "690eef6af6a4c6781b97d8fd"

// Connection check
socket.on("connect", () => {
    console.log("Connected to server with ID:", socket.id);

    socket.emit("joinRoom", {roomId : groupId})
});

socket.on("newMemberJoined", (data) => {
    console.log(data.message)
})

socket.on("removeMember", (data) => {
    console.log(data.message)
})

// Disconnect event
socket.on("disconnect", () => {
    console.log("Disconnected from server");
});
