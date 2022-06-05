import styled from "styled-components"
import Footer from "./Footer"


function Button({title}){
    return(<>
     <Botton>{title}</Botton>
    </>)
}


export default function Home({choose , login , perks , token}){


    console.log(login)
    console.log(choose)

    return(<>
    <Group>
    <ImagePlan src={choose.image}/>
    <ion-icon name="person-circle-outline"></ion-icon>
    <GroupApp>
    <Title>Ola , {login.name}</Title>
   {perks.map((item , index)=><Button title={item.title} id={item.it} link={item.link} membershipId={item.membershipId} />)}
   <Footer token={token} />
    </GroupApp>
   
    </Group>
    </>)
}


const Botton=styled.button`
margin-bottom: 8px;
background-color:#FF4791 ;
border-radius: 8px;
width: 299px;
height: 52px;
color: white;
font-size: 18px;
`

const GroupApp=styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Title=styled.h1`
font-size: 24px;
color: white;
margin-bottom: 53px;
`

const ImagePlan=styled.img`
width: 70px;
height: 70px;
position: fixed;
top: 32px;
left: 38px;
`
const Group=styled.div`


ion-icon{
    height: 43px;
    width: 44px;
    visibility: visible;
    position: fixed;
    right: 22px;
    top: 22px;
    color: black;
    background-color: white;
    border-radius: 50px;
}
`