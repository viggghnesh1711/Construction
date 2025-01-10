import { cookieCreation } from "@/utils/cookiecreation"

export async function POST(request){
    try{
        const form = await request.json()
        const username=form.username
        const password=form.password
        const user="sunny"
        const pass="kachare"

        if(username==user && password==pass){
            await cookieCreation()
            return new Response(JSON.stringify({message:"login succesfull",status:true}),{
                status:200,
        })
        }
        else{
            return new Response(JSON.stringify({message:"Invalid credentials",status:false}),{
                status:200,
                })
        }

    }
    catch(error){
        return new Response(JSON.stringify({message:"Something went wrong"}),{
            status:200,
    })
    }
}