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



    return (
        <div className="App">
            <header className="App-header">
                Success
            </header>
        </div>
    );
}

export default Success;