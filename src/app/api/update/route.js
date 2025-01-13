import Project from "@/app/models/Project"
import connectMongo from "@/lib/dbConnect"
Project


export async function POST(request){
    try{
        await connectMongo()
        const form = await request.json()

        const updatedproject = await Project.findOneAndUpdate({
            _id:form.ID
        },
    {
        title:form.title,
        desc:form.desc,
        imgurl:form.imageUrl
    })

        return new Response(JSON.stringify({message:"updated succesfully"},{
            status:200
        }))
    }
    catch(error){
        return new Response(JSON.stringify({message:"something went wrong"},{
            status:200
        }))
    }
}