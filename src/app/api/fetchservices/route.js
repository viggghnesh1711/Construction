import Services from "@/app/models/Services"
import connectMongo from "@/lib/dbConnect"


export async function GET(request){
    try{
        await connectMongo()
        const service = await  Services.findOne({_id:'678633b726d8945c41a38208'})
        console.log("its got ",service.three)
        return new Response(JSON.stringify(service,{
            status:200
        }))
    }
    catch(error){
        return new Response(JSON.stringify({message:"Something went wrong"},{
            status:500
        }))
    }
}