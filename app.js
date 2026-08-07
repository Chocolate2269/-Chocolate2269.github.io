
const SUPABASE_URL = "PASTE_YOUR_URL_HERE"
const SUPABASE_ANON_KEY = "PASTE_YOUR_KEY_HERE"
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function signUp(){
  const e=document.getElementById('email').value
  const p=document.getElementById('password').value
  const {error}=await supabase.auth.signUp({email:e,password:p})
  document.getElementById('msg').innerText=error?error.message:"Check email to verify!"
}
async function login(){
  const e=document.getElementById('email').value
  const p=document.getElementById('password').value
  const {error}=await supabase.auth.signInWithPassword({email:e,password:p})
  if(error)document.getElementById('msg').innerText=error.message
  else window.location.href="dashboard.html"
}
