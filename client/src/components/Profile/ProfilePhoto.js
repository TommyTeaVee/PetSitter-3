import React from "react";
import fakeprofile from "./fakeuser.jpeg";
import { Image } from "semantic-ui-react";
import "./ProfilePhoto.css";

export const ProfilePhoto = () => (

    <div className="fakeprofile">
        <Image src={fakeprofile} alt="profile pic" size="medium" circular />
    </div>
)