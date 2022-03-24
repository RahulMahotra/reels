import * as React from 'react';
import { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import CloudUploadIcon from '@material-ui/icons';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert'; 
import { makeStyles } from '@mui/styles';
import {Link} from 'react-router-dom'; 

import {useNavigate} from 'react-router-dom'; 

import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import './Login.css';
import insta from '../Assets/Instagram.JPG'
import bg from '../Assets/insta.png'
import img1 from '../Assets/img1.jpg';
import img2 from '../Assets/img2.jpg';
import img3 from '../Assets/img3.jpg';
import img4 from '../Assets/img4.jpg';
import img5 from '../Assets/img5.jpg';
import { AuthContext } from '../Context/AuthContext';

export default function Login() {
  const store = useContext(AuthContext)
  console.log(store);

  const useStyles = makeStyles({
    text1:{
      color : 'grey',
      textAlign : 'center'
    },
    text2:{
        textAlign: 'center',
        color : '#1976d2'
    },
    card2:{
      height : '9vh',
      marginTop : '2%',
      marginBottom : '5%'
    }
  })
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const {login} = useContext(AuthContext);

  const handleClick = async ()=>{
    try{
        setError('');
        setLoading(true)
        let res = await login(email, password);
        setLoading(false);
        navigate('/')
    }catch(err){
      setError(err);
      setTimeout(()=>{
        setError('')
      }, 2000);
      setLoading(false);
    }
  }

  return (
      <>
      <div className="loginWrapper">
          <div className="imgcar" style={{backgroundImage:'url('+bg+')',backgroundSize:'cover'}}>
            <div className="car">
            <CarouselProvider
              naturalSlideWidth={238}
              naturalSlideHeight={423}
              hasMasterSpinner
              isPlaying={true}
              infinite={true}
              dragEnabled={false}
              totalSlides={5}
              >
            <Slider>
              <Slide index={0}><Image src={img1}/></Slide>
              <Slide index={1}><Image src={img2}/></Slide>
              <Slide index={2}><Image src={img3}/></Slide>
              <Slide index={3}><Image src={img4}/></Slide>
              <Slide index={4}><Image src={img5}/></Slide>
            </Slider>
            </CarouselProvider>
            </div>
          </div>
         

          <div className="loginCard">
            <Card variant="outlined">
                <div className="insta-logo">
                  <img src={insta} alt="" />
                </div>
        <CardContent>
        {error !== '' && <Alert severity="error">{error}</Alert>}
        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small" style={{marginBottom:'3%'}} value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Typography className={classes.text2} variant="subtitle1">
          Forgot password?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" fullWidth={true} variant="contained" margin="dense" onClick={handleClick} disabled={loading}>
          Log In
        </Button>
      </CardActions>
    </Card>
    <Card variant="outlied" className={classes.card2}>
      <CardContent>
       <Typography className={classes.text1} variant="subtitle1">
         Make a new Account? <Link to="/signup">Sign Up</Link>   
        </Typography>
      </CardContent>
    </Card>
  
          </div>

      </div>
   </>
  );
}