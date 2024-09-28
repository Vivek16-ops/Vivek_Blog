import Mongoconnect from "../connectMongodb"
import Blogs from "../blogsSchema";

export async function GET() {
    try {
        await Mongoconnect();
        const blogData = await Blogs.find({});
        return Response.json({ success: true, all_blogs: blogData });
    } catch (err) {
        return Response.json({ success: false, msg: err.message })
    }
}