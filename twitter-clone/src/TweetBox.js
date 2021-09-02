import React, { useState, useEffect } from "react";
import "./tweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
import GifIcon from "@material-ui/icons/Gif";
import CloseIcon from "@material-ui/icons/Close";
import Gifs from "./Gifs";
import "./Gifs.css";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const [seeGifs, setSeeGifs] = useState(false);

  const openGifs = () => {
    setSeeGifs(!seeGifs);
    console.log("GIF==>", seeGifs);
  };
  //get Gif collection from Firebase!!
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    db.collection("Gifs").onSnapshot((snapshot) =>
      setGifs(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);

  const sendTweet = () => {
    // e.preventDefault();

    db.collection("Posts").add({
      displayName: "some_guy",
      username: "Some_Guy",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      timestamp: Date.now(),
      avatar:
        "data:image/jpeg;base64,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",
    });
    setTweetImage("");
    setTweetMessage("");
  };

  //OPEN THE GIF ICON TO ADD A GIF TO YOUR POST!
  return (
    <div className="tweetBox">
      {seeGifs && (
        <div className="gif__container">
          <div className="gif__close">
            <span onClick={() => openGifs()}>
              <CloseIcon />
            </span>
          </div>
          <div>
            {gifs.map((g) => (
              <div
                className="gif__imageDiv"
                onClick={() => setTweetImage(g.data.image)}
              >
                <img className="gif__image" src={g.data.image} />
              </div>
            ))}
          </div>
        </div>
      )}

      <form>
        <div className="tweetBox__input">
          <Avatar src="data:image/jpeg;base64,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" />

          <input
            placeholder="whats happening?"
            value={tweetMessage}
            name={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            type="text"
          />
        </div>
        <input
          placeholder="enter image url"
          type="text"
          className="tweetBox__imageInput"
          value={tweetImage}
          name={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
      </form>
      <div className="tweetBox__footer">
        <div className="gifIcon__div" onClick={() => openGifs()}>
          <GifIcon fontSize="large" color="primary" />
          {/* <p>Click!</p> */}
          <AddAPhotoIcon />
        </div>

        <Button className="tweetBox__button" onClick={(e) => sendTweet()}>
          Tweet
        </Button>
      </div>
    </div>
  );
}

export default TweetBox;
