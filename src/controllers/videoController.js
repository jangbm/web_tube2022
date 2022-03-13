const videos = [
  { title: "1번비디오", rating: 4 },
  { title: "2번비디오", rating: 2 },
  { title: "3번비디오", rating: 3 },
  { title: "4번비디오", rating: 1 },
];
export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", videos });
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const search = (req, res) => res.send("search video");
export const upload = (req, res) => res.send("upload video");
export const deleteVideo = (req, res) => res.send("deleteVideo video");
