export type SignupUser = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}
export type Login = {
    email: string;
    password: string;
}

export const signup = async (user: SignupUser)=>{
    try{
        console.log("URL", process.env.NEXT_PUBLIC_API_URL)
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
            method: "POST",
            body: JSON.stringify(user)
        })
        const json = await res.json()
        return json

    }catch(e){
        return console.error("Error signing up user", e)
    }
}
export const login = async (user: Login)=>{
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth`, {
            method: "POST",
            body: JSON.stringify(user)
        })
        const json = await res.json()
        return json

    }catch(e){
        return console.error("Error logging in user", e)
    }
}