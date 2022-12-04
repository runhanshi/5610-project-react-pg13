import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    return(
        <div className="row mt-2">
            <div className="col-10 col-lg-8 col-xl-8 border rounded px-0 py-3">
                <div className="row px-3">
                    <div className="col-1">
                        <i className="bi bi-arrow-left"></i>
                    </div>
                    <div className="col-11">
                        <div className="fw-bold">{profile.firstName} {profile.lastName}</div>
                        <div className="text-secondary small">{profile.numberOfTweets} Tweets</div>
                    </div>
                </div>
                <div>
                    <div className="position-relative">
                        <img src={profile.bannerPicture} alt="banner" className="w-100 px-0 mx-0 border-0"></img>
                        <img src={profile.profilePicture} alt="avatar" className="h-50 rounded-circle card-img-overlay mx-3 my-5 top-50"></img>
                    </div>
                    <Link to="../edit-profile">
                        <button className="rounded-pill btn btn-outline-secondary float-end w-25 mt-2 ps-3 pe-3 me-2 fw-bold text-black">Edit profile</button>
                    </Link>
                </div>
                <div className="mt-5 px-3">
                    <div>{profile.firstName} {profile.lastName}</div>
                    <div className="text-secondary small">{profile.handle}</div>
                    <p className="text-dark small pt-2">{profile.bio}</p>
                </div>
                <div className="row px-3 pb-1 bt-0">
                    <div className="col-4 small text-secondary"><i className="bi bi-geo-alt text-secondary pe-2"></i>{profile.location}</div>
                    <div className="col-4 small text-secondary"><i className="bi bi-balloon text-secondary pe-2"></i>Born {profile.dateOfBirth}</div>
                    <div className="col-4 small text-secondary"><i className="bi bi-calendar3 text-secondary pe-2"></i>Joined {profile.dateJoined}</div>
                </div>
                <div className="row px-3">
                    <div className="col-3">
                        <span className="fw-bold small">{profile.followingCount}</span><span className="ps-1 text-secondary small">Following</span>
                    </div>
                    <div className="col-9">
                        <span className="fw-bold small">{profile.followersCount}</span><span className="ps-1 text-secondary small">Followers</span>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default ProfileComponent;