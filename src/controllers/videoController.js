let videos = [
    {
        title:"1st one", 
        rating: 5,
        comments:2,
        createdAt: "2 mins ago",
        views:1,
        id:1,
    },
    {
        title:"2nd one", 
        rating: 4,
        comments:2,
        createdAt: "2 mins ago",
        views:49,
        id:2,
    },
    {
        title:"3rd one", 
        rating: 4,
        comments:2,
        createdAt: "2 mins ago",
        views:49,
        id:3,
    },
];

export const trending = (req, res) => {
    return res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => {
    const { id } = req.params;
    const video = videos[id-1]; // computer는 0부터 숫자를 세기 때문에 -1해줌
    return res.render("see", { pageTitle: `Watch Video ${video.id}`, video });
};
export const edit = (req, res) => {
    const { id } = req.params;
    const video = videos[id-1];
    return res.render("edit", { pageTitle: `Edit Video ${video.id}`, video });
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("DeleteVideo");