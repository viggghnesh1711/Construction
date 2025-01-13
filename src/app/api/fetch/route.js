import Project from "@/app/models/Project";
import connectMongo from "@/lib/dbConnect";

export async function GET(request){
try{
    await connectMongo()

    const projects = await Project.find()
    return new Response(JSON.stringify(projects,{
        status:200
    }))
}
catch(error){
    return new Response(JSON.stringify({message:"something weent wrong"},{
        status:500
    }))
}
}