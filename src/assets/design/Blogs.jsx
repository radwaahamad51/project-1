const BlogPosts = () => {
    const posts = [
        { title: "Top 10 Gadgets of 2024", snippet: "Discover the most innovative gadgets of this year." },
        { title: "How to Choose the Right Sports Equipment", snippet: "A comprehensive guide to picking the best gear." },
        { title: "5 Ways Technology is Changing Sports", snippet: "Explore the impact of tech in the sports world." },
    ];

    return (
        <div className=" mx-auto max-w-7xl p-10 bg-white">
            <h2 className="text-3xl font-bold text-center mb-6">From Our Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {posts.map((post, index) => (
                    <div key={index} className="p-6 bg-gray-200 rounded-lg shadow-md">
                        <h3 className="font-bold">{post.title}</h3>
                        <p>{post.snippet}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPosts;
