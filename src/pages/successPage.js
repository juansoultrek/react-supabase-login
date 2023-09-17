import {createClient} from "@supabase/supabase-js";
import {useNavigate} from "react-router-dom";
import React, { useEffect, useState} from "react";


const supabase = createClient(
    process.env.REACT_APP_SUPABASE_CLIENT_URL,
    process.env.REACT_APP_SUPABASE_PROJECT_KEY
)
function Success() {

    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect( () => {
        async function getUserData(){
            await supabase.auth.getUser().then((value) => {
                if(value.data?.user){
                    console.log(value.data.user)
                    setUser(value.data.user);
                }

            })
        }
        getUserData();
    }, []);

    async function signOutUser() {
        const {error} = await supabase.auth.signOut();
        navigate("/");
    }



    return (
        <div className="App">
            <header className="App-header">
                <h1>Success</h1>
                <button onClick={ () =>signOutUser()}>Sign Out
                </button>
            </header>
        </div>
    );
}

export default Success;