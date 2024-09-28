import Mongoconnect from "../connectMongodb"
import Blogs from "../blogsSchema"

export async function POST(request) {
    try {
        await Mongoconnect();
        const { slug } = await request.json();
        const blogData = await Blogs.findOne({ slug });
        return Response.json({ success: true, target_blog: blogData })
    } catch (error) {
        return Response.json({ success: false, msg: error.message })
    }
}