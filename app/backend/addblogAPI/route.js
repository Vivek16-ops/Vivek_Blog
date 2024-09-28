import Mongoconnect from "../connectMongodb"
import Blogs from "../blogsSchema";

export async function POST(request) {
    try {
        await Mongoconnect();
        const data = await request.json();
        const {
            title,
            description,
            slug,
            date,
            author,
            image,
            content
        } = data;

        // Adding the above data into the database 
        const newBlog = new Blogs({
            title,
            description,
            slug,
            date,
            author,
            image,
            content
        })

        await newBlog.save();
        return Response.json({ success: true, msg: "Blog Succesfully Added" });
    } catch (error) {
        return Response.json({ success: false, msg: error.message });
    }
}