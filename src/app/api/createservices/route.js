import Services from "@/app/models/Services";
import connectMongo from "@/lib/dbConnect";
Services
connectMongo

export async function POST(request){

    try{
        await connectMongo()
        const service = await Services.create({
            one:"300",
            two:"250",
            three:"5"
        })

        console.log("service created :",service)

        return new Response(JSON.stringify({message:"service created"},{
            status:500
        }))
    }
    catch(error){
        return new Response(JSON.stringify({message:"something went wrong"},{
            status:500
        }))
    }

}