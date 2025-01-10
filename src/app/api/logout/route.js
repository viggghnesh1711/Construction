import { cookies } from 'next/headers';

export async function POST(request) {
  try{
    const cookieStore = cookies();
    
    // Delete specific cookies
    cookieStore.delete('shinde', { path: '/' });

    return new Response(JSON.stringify({message:"logout successfull "}),{
        status:200,
        })
  }
  catch(error){
  
    return new Response(JSON.stringify({message:"something went wong "}),{
        status:200,
        })
  }
}