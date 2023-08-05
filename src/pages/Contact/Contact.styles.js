import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
    contactsDiv:{
        display:'flex',
        flexWrap:'wrap',
        gap:'20px',
        marginTop:'20px'
    },
    btnContacts:{
        minWidth:'150px',
        maxWidth:'200px',
        padding:'8px 20px',
        borderRadius:'5px',
        cursor:'pointer',
        '&:hover':{
            boxShadow:'0px 0px 10px 0px pink',
            background:'pink',
            color:'maroon'
        },
        border:'1px solid pink',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'2px'
    }

})