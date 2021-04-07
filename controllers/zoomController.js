import { v4 as uuidv4 } from "uuid";

// @route        GET /api/v1/zoom
// @desc         Opening zoom room using uuid.
const room = (req, res, next) => {
  res.redirect(`/${uuidv4()}`);
};

const roomId = (req, res, next) => {
  res.render("room", { roomId: req.params.roomId });
};

export { room, roomId };
