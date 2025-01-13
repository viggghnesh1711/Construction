import Project from "@/app/models/Project"
import connectMongo from "@/lib/dbConnect"


export async function POST(request){
    try{
        const form = await request.json()

        await connectMongo();
        const project = await Project.findOne({_id:form.ID})
        return new Response(JSON.stringify(project,{
            status:200
        }))
    }
    catch(error){
        return new Response(JSON.stringify({message:"something weent wrong"},{
            status:500
        }))
    }
}