const videos = [
  { id: 1, title: "1번비디오", views: 1, rating: 4 },
  { id: 2, title: "2번비디오", views: 155, rating: 2 },
  { id: 3, title: "3번비디오", views: 321, rating: 3 },
  { id: 4, title: "4번비디오", views: 1245, rating: 1 },
];
export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", videos });
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
