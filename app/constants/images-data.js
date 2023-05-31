export const CATEGORIES = {
	editorial: 'editorial',
	music: 'music',
	creative: 'creative',
	video: 'video',
	blog: 'blog',
};

export const gallery = [
	{
		id: Math.floor(Math.random() * 1000000),
		src: 'https://media.gettyimages.com/id/1258277516/photo/a-victorious-taro-daniel-of-japan-shakes-hands-with-australias-christopher-oconnell-after.jpg?s=612x612&w=0&k=20&c=SiVFYuDgL3NFoyjl3D6sqBSBPZzPbbrWY6b0M7bhfuk=',
		title: 'Serene landscapes in harmony',
		category: [CATEGORIES.editorial, CATEGORIES.creative],
	},
	{
		id: Math.floor(Math.random() * 1000000),
		src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
		title: 'Exploring the urban tapestry',
		category: [CATEGORIES.music, CATEGORIES.video],
	},
	{
		id: Math.floor(Math.random() * 1000000),
		src: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80',
		title: 'Candid moments frozen in time',
		category: [CATEGORIES.creative],
	},
	{
		id: Math.floor(Math.random() * 1000000),
		src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=859&q=80',
		title: "Nature's symphony of colors",
		category: [CATEGORIES.video],
	},
	{
		id: Math.floor(Math.random() * 1000000),
		src: 'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
		title: "Portraits capturing life's essence",
		category: [CATEGORIES.blog, CATEGORIES.editorial],
	},
	{
		id: Math.floor(Math.random() * 1000000),
		src: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
		title: 'Architectural wonders unveiled',
		category: [CATEGORIES.blog],
	},
	{
		id: Math.floor(Math.random() * 1000000),
		src: 'https://images.unsplash.com/photo-1604955562858-ea42e1e3be70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
		title: 'Abstract visions unravelled',
		category: [CATEGORIES.editorial],
	},
	{
		id: Math.floor(Math.random() * 1000000),
		src: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
		title: 'Aerial perspectives from above',
		category: [CATEGORIES.music],
	},
	{
		id: Math.floor(Math.random() * 1000000),
		src: 'https://images.unsplash.com/photo-1591871987673-f1513e38493b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=692&q=80',
		title: 'Immersed in the wilderness',
		category: [CATEGORIES.creative],
	},
	{
		id: Math.floor(Math.random() * 1000000),
		src: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1300&q=80',
		title: 'Chronicles of the vibrant streets',
		category: [CATEGORIES.video],
	},
	{
		id: Math.floor(Math.random() * 1000000),
		src: 'https://images.unsplash.com/photo-1471666875520-c75081f42081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1272&q=80',
		title: 'Macro marvels up close',
		category: [CATEGORIES.blog, CATEGORIES.creative],
	},
	{
		id: Math.floor(Math.random() * 1000000),
		src: 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=696&q=80',
		title: 'Timeless beauties in frames',
		category: [CATEGORIES.blog],
	},
	{
		id: Math.floor(Math.random() * 1000000),
		src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
		title: 'Ethereal landscapes embracing serenity',
		category: [CATEGORIES.blog, CATEGORIES.editorial],
	},
	{
		id: Math.floor(Math.random() * 1000000),
		src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80',
		title: 'Whispers of light in the urban maze',
		category: [CATEGORIES.blog, CATEGORIES.editorial],
	},
	{
		id: Math.floor(Math.random() * 1000000),
		src: 'https://images.pexels.com/photos/733767/pexels-photo-733767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		title: 'Silhouette of a Man Playing Saxophone during Sunset',
		category: [CATEGORIES.music],
	},
	{
		id: Math.floor(Math.random() * 1000000),
		src: 'https://images.pexels.com/photos/2441175/pexels-photo-2441175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		title: 'Man Playing Guitar While Sitting on Open Door',
		category: [CATEGORIES.music],
	},
	{
		id: Math.floor(Math.random() * 1000000),
		src: 'https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1600',
		title: 'Unknown Person Playing Guitar',
		category: [CATEGORIES.music, CATEGORIES.video],
	},
	{
		id: Math.floor(Math.random() * 1000000),
		src: 'https://images.pexels.com/photos/6953993/pexels-photo-6953993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		title:
			'Young diverse ladies recording vlog about makeup products on smartphone',
		category: [CATEGORIES.creative, CATEGORIES.video],
	},
];
