import Project from "@/app/models/Project"
import connectMongo from "@/lib/dbConnect";

export async function POST(request){
    try{
        await connectMongo();
        const form = await request.json()
        const project = await Project.create({
            title:form.title,
            desc:form.desc,
            imgurl:form.imageUrl
        })
        console.log("New project :",project)
        return new Response(JSON.stringify({message:"created project succesfully"}),{
            status:200,
        })
    }
    catch(error){
        console.log("its a error",error)
        return new Response(JSON.stringify({message:"something went wrong"}),{
            status:200,
        })
    }
}