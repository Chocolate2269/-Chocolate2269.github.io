// 1. Connect to Supabase
const supabaseUrl = 'https://chocolate2269.github.io/-Chocolate2269.github.io/'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqeGtqb3dzanpqdm5tcWlibmpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYxMTUxNzMsImV4cCI6MjEwMTY5MTE3M30.Wai6MKZFDmvx9gIlvmUf_QVMcVJigKcAQtfqkJsG3Ms' // <-- you still need to get this 1 thing
const supabase = supabase.createClient(supabaseUrl, supabaseKey)

// 2. SIGN UP CODE
document.getElementById('signupBtn').addEventListener('click', async () => {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: 'https://chocolate2269.github.io/-Chocolate2269.github.io/'
    }
  })

  if(error){
    alert(error.message)
  } else {
    alert('Account created! Logging you in...')
    const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })
    if(loginError){
      alert(loginError.message)
    } else {
      window.location.href = 'dashboard.html' 
    }
  }
})
