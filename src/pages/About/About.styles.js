import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    aboutMeHeading:{ 
     marginTop:'100px',
     fontFamily:'Goblin One'
    },
    aboutMeSpan:{
        fontFamily:'Raleway', 
        marginBottom:'20px'
    },
    subheading:{
        fontFamily:'Bebas Neue'
    },
    setupList:{
      display:'flex',
      flexDirection:'column',
      gap:'20px', 
      '@media(max-width:786px)':{
        gap:'40px'
    },
    },
    productRowDiv:{
        display:'grid',
        maxWidth:'100vw',
        gridTemplateColumns:'30% 50%',
        '@media(max-width:786px)':{
            margin:'auto',
            width:'95%', 
        },
        '@media(max-width:500px)':{
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            textAlign:'center',
        }
    },
    productRowKeySpan:{
        background:'linear-gradient(180deg, transparent 60%, pink 60%)',  
        fontWeight:'900',
        fontFamily:'Rem'
    },
    productRowValueSpan:{
        fontFamily:'Raleway',
        display:'flex',
        alignItems:'center',
        gap:'10px'
    },
    interestsDivContainer:{
        display:'flex'
    },
    hobbyRowDiv:{
        display:'grid',
        maxWidth:'100vw',
        gridTemplateColumns:'30% 50%',
        '@media(max-width:786px)':{
            margin:'auto',
            width:'95%', 
        },
        '@media(max-width:500px)':{
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            textAlign:'center',
        }
    },
    hobbyRowKeySpan:{
        background:'linear-gradient(180deg, transparent 60%, yellow 60%)',  
        fontWeight:'900',
        fontFamily:'Rem'
    },
    noteDiv:{
        marginTop:'100px',
        marginBottom:'10px',
        fontFamily:'Rem'
    }

})