import React from "react";

export default function Reply(props)
{
	return (
		<div className="d-flex gap-2 my-2 ps-5">
			<img
				src={props.img}
				width="48"
				height="48"
				className="rounded-circle"
				style={{ objectFit: "cover" }}
			/>
			<div
				className="rounded rounded-3 p-2"
				style={{ backgroundColor: "#E5E7EB" }}
			>
				<span className="fw-semibold">{props.name}</span>
				<br />
				<span>{props.text}</span>
				<div className="d-flex align-items-center gap-1">
					{props.like > 0 ? <img src="/like.svg" width={20}></img> : null}
					{props.like > 0 ? <span className="text-muted">{props.like} คน</span> : null}
				</div>
			</div>
		</div>
	);
}
