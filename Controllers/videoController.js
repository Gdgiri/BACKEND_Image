import Video from "../Models/videoSchema.js"; // Import the video model

export const createVideos = async (req, res) => {
  const { imgUrl, videoUrl } = req.body;

  // Validate input
  if (!imgUrl || !videoUrl) {
    return res
      .status(400)
      .json({ message: "imgUrl & videoUrl fields are required" });
  }

  try {
    const newVideo = new Video(req.body);
    await newVideo.save();

    res
      .status(200)
      .json({ message: "Video uploaded successfuly", result: newVideo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// export const getUrlById = async (req, res) => {
//   try {
//     const urlId = req.params._id;
//     console.log("Fetching video with ID:", urlId); // Log the ID being fetched

//     const url = await Video.findById(urlId);

//     if (!url) {
//       console.log("Video not found");
//       return res.status(404).json({ message: "URL Not Found" });
//     }

//     console.log("Video found:", url); // Log the found video
//     res.status(200).json({
//       message: "URL Retrieved successfully",
//       result: url,
//     });
//   } catch (error) {
//     console.error("Error retrieving video:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

export const getUrl = async (req, res) => {
  try {
    const url = await Video.find();
    res.status(200).json({ message: "gett all video url", result: url });
  } catch (error) {
    console.log(error);
  }
};
