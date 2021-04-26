import React from "react";
import Social from "./social"
import Avatar from "../posts/img/rostvor.jpg";
import ImgPost from "../posts/img/zhovkva.jpg";



const Student = ({name, nickName, age}) => {
    
    return (
        <div className="main-block">
            <div className="avatar">
                <img src={Avatar} />
            </div>
            <div className="hold_post">
                
                <div className="hold-header"> 
                    <div className="info_user">
                        @{nickName} / PostDate: 14.04.2021 
                        <p>Welcome to <span>MY</span> city <span>#Zhovkva</span></p>
                    </div>
                </div>
            
                <img className="imgPost" src={ImgPost} />
                <div className="hold_icon">
                    <div><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>{Social.like}</div>
                    <div><i class="fa fa-share-square-o" aria-hidden="true"></i>{Social.share}</div>
                    <div><i class="fa fa-thumbs-o-down" aria-hidden="true"></i>{Social.dislike}</div>
                    <div><i class="fa fa-eye" aria-hidden="true"></i>{Social.view}</div>
                </div>
            </div>
        </div>
    )
}
export default Student;