let aborter = new AbortController();

document.getElementById("loginForm").addEventListener('submit', (event)=>(register(event)));

async function register(event){
    event.preventDefault();
    const email = document.getElementById("email").value;
    const ps = document.getElementById("password").value;
    const format = {email: email, pswd: ps};
    await connectnSubmit('/login', format);
}

async function connectnSubmit(jmethod, info){
    aborter.abort();
    try{
        aborter = new AbortController();
        const response = await fetch(jmethod,{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(info),
            signal: aborter.signal
        });
        const data = await response.json();
        return data;
    }catch (error){
        if (error=='AbortError'){console.log("Solicitud cancelada")}
    }
}