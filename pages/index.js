import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import { comments } from "../libs/comments";

export default function Home()
{
	const postOwn = [{
		username: "Thanaporn Chanchanayothin 640610638",
		userImagePath: "/profileImages/profile.jpg",
		postText: "Quiz ง่ายจังเลย ขอยาก ๆ กว่านี้ได้ไหม #261207",
		likeNum: 100,
		comment: comments,
	}];

	return (
		<div
			style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
			className="p-3"
		>
			<div
				style={{ maxWidth: "700px" }}
				className="mx-auto bg-white p-3 rounded rounded-3 shadow-sm"
			>
				{
					postOwn.map((x,i) => <PostOwner
						name={x.username}
						img={x.userImagePath}
						text={x.postText}
						like={x.likeNum}
						reply={x.comment}
						key={i}
					/>)
				}
			</div>
		</div>
	);
}