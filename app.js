const SUPABASE_URL = 'https://fjkxjowsjzvnbbqbnjr.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' // use your full key
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function signUp(){
    const e = document.getElementById('email').value
    const p = document.getElementById('password').value
    const { error } = await supabase.auth.signUp({email:e,password:p})
    if(error) { document.getElementById('msg').innerText = error.message }
    else { document.getElementById('msg').innerText = "Account created! Check email" }
}

async function login(){
    const e = document.getElementById('email').value
    const p = document.getElementById('password').value
    const { error } = await supabase.auth.signInWithPassword({email:e,password:p})
    if(error) { document.getElementById('msg').innerText = error.message }
    else { window.location.href = "dashboard.html" }
}
