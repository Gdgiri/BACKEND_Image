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
    // Use the imported Video model to create a new entry
    // const video = await Video.create({
    //   imgUrl,
    //   videoUrl,
    // });

    const newVideo = new Video(req.body);
    await newVideo.save();

    // res.status(201).json({
    //   success: true,
    //   video,
    // });

    res
      .status(200)
      .json({ message: "Video uploaded successfuly", result: newVideo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
