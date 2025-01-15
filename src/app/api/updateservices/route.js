
import Services from "@/app/models/Services"
import connectMongo from "@/lib/dbConnect"

export async function POST(request){
    try{
        await connectMongo()
        const form = await request.json()
        const updatedservices = await Services.findOneAndUpdate({
            _id:'678633b726d8945c41a38208'
        },
    {
        one:form.awardWinning,
        two:form.propertyReady,
        three:form.happyCustomers
    })
    console.log()

        return new Response(JSON.stringify({message:"data updated sucessfully"},{
            status:500
        }))
    }
    catch(error){
        return new Response(JSON.stringify({message:"somethnf went wrong"},{
            status:500
        }))
    }
}