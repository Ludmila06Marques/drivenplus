import { Link  , useNavigate} from "react-router-dom"
import styled from "styled-components"
import axios from "axios"

export default function HomeScreen({ stockPlan, token , setToken ,setEmail , email , password , setPassword}){

    const navigate= useNavigate()

    function login(){
        const body={
         email,
         password}

       const promise= axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/login' , body)

             promise
             .then(res=>{   
                setToken(res.data.token)    
                 console.log(res.data)             
                 navigate("/subscriptions")
                // navigate("/home")
             })
              
           .catch(err=>{
             console.log(err)
             setEmail("")
             setPassword("")
           
           
           })
        }
    return(
        <>
        <Container>
        <Logo src="/img/Logo.png"/>
        <InputEmail  placeholder=" E-mail" onChange={(e)=> setEmail(e.target.value)} value={email} required/>
        <InputPassword  type="password" placeholder=" Senha" onChange={(e)=> setPassword(e.target.value)} value={password} required/>
        <LooginButton onClick={login} >Entrar</LooginButton>
        <Link to="/sign-up">
        <Register>Não possuí uma conta? Cadastre-se</Register>
        </Link>
        </Container>
        
        </>
    )
}
const Register=styled.h1`
color: 
#FFFFFF;
font-size: 14px;
margin-top: 24px;
text-decoration: underline;
`
const LooginButton=styled.button`
background-color: 
#FF4791;
width: 298px;
height: 52px;
margin-top: 24px;
border-radius: 8px;
`
const InputPassword=styled.input`
width: 299px;
height: 52px;
margin-top: 16px;
border-radius: 8px;
`
const InputEmail=styled.input`
width: 299px;
height: 52px;
margin-top: 100px;
border-radius: 8px;
`
const Container=styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Logo=styled.img`
font-size: 20px;

`