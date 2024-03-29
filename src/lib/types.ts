export type DevPost = {
	canonical_url: string;
	collection_id: null | string;
	comments_count: number;
	cover_image: string;
	created_at: string;
	crossposted_at: string | null;
	description: string;
	edited_at: string;
	id: number;
	last_comment_at: string;
	path: string;
	positive_reactions_count: number;
	public_reactions_count: number;
	published_at: string;
	published_timestamp: string;
	readable_publish_date: string;
	reading_time_minutes: number;
	slug: string;
	social_image: string;
	tag_list: string[];
	tags: string | null;
	title: string;
	type_of: string;
	url: string;
	user: DevUser;
};

type DevUser = {
	github_username: string | null;
	profile_image: string;
	profile_image_90: string;
	user_id: number;
	username: string;
	website_url: string | null;
	twitter_username: string | null;
};
