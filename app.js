
const SUPABASE_URL = "https://fjxkjowsjzjvnmqibnjr.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqeGtqb3dzanpqdm5tcWlibmpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYxMTUxNzMsImV4cCI6MjEwMTY5MTE3M30.Wai6MKZFDmvx9gIlvmUf_QVMcVJigKcAQtfqkJsG3Ms"
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function signUp(){
  const e=document.getElementById('email').value
  const p=document.getElementById('password').value
  const {error}=await supabase.auth.signUp({email:e,password:p})
  document.getElementById('msg').innerText=error?error.message:"Check email to verify!"
}
async function login(){   window.location.href = "dashboard.html";
  const e=document.getElementById('email').value
  const p=document.getElementById('password').value
  const {error}=await supabase.auth.signInWithPassword({email:e,password:p})
  if(error)document.getElementById('msg').innerText=error.message
  else window.location.href="dashboard.html"
}
