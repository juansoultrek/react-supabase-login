import {createClient} from "@supabase/supabase-js";
import {useNavigate} from "react-router-dom";
import {Auth} from "@supabase/auth-ui-react";
import {ThemeSupa,} from '@supabase/auth-ui-shared'


const supabase = createClient(
    process.env.REACT_APP_SUPABASE_CLIENT_URL,
    process.env.REACT_APP_SUPABASE_PROJECT_KEY
)
function Login() {
    const navigate = useNavigate();
    supabase.auth.onAuthStateChange(async (event) =>{
        console.log('Auth state changed:', event);
        if (event === "SIGNED OUT") {
            navigate("/success");
        } else {
            navigate("/");
        }
    })
    return (
        <div className="App">
            <header className="App-header">
                <Auth
                    supabaseClient={supabase}
                    appearance={{ theme: ThemeSupa }}
                    providers={['discord']}
                />
            </header>
        </div>
    );
}

export default Login;