import React from "react";
import Comment from "../components/Comment";

export default function PostOwner(props)
{
	return (
		<div className="vstack gap-3">
			<div className="d-flex align-items-center gap-3">
				<img
					src={props.img}
					width="48"
					height="48"
					className="rounded-circle"
					style={{ objectFit: "cover" }}
				/>
				<span className="fw-semibold fs-5">{props.name}</span>
			</div>
			<span>{props.text}</span>
			<div className="d-flex align-items-center gap-1">
				{props.like > 0 ? <img src="/like.svg" width={20}></img> : null}
				{props.like > 0 ? <span className="text-muted">{props.like} คน</span> : null}
			</div>
			<hr className="m-0" />
			{
				props.reply.map((x, i) => <Comment
					name={x.username}
					img={x.userImagePath}
					text={x.commentText}
					like={x.likeNum}
					reply={x.replies}
					key={i}
				/>)
			}
		</div>
	);
}
