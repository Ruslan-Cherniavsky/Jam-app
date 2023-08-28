import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import capFirtsLett from "../helpers/capFirstLett";
import { useSelector } from "react-redux";
import { RootState } from "../redux_features/store";




function JamerCard({ jemerDataLocal, jemerCardId }: { jemerDataLocal: any, jemerCardId: any }) {

  const globalUserId: any = useSelector((state: RootState) => state.currentUserData.userId);


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.primary,
  }));


  const ItemImg = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(8),
    textAlign: 'center',
    color: theme.palette.text.primary,
  }));


  const ItemOboutMe = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    height: '300px',
    textAlign: 'left',
    color: theme.palette.text.primary,
  }));

  const ItemInflu = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    height: '300px',

    textAlign: 'left',
    color: theme.palette.text.primary,
  }));


  const FriendsJams = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.3),

    textAlign: 'left',
    color: theme.palette.text.primary,
  }));



  return (<>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>

                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>

                    <Grid item xs={4}>
                      <ItemImg>IMG</ItemImg>
                    </Grid>

                    <Grid item xs={4}>
                      <Item > <span className="secTex">Nick Name: </span>{capFirtsLett(jemerDataLocal?.userName)}</Item>
                      <Item className="itemConected"> <span className="secTex"> Full Name: </span> {capFirtsLett(jemerDataLocal?.firstName)} {' '} {capFirtsLett(jemerDataLocal?.lastName)}</Item>

                      <Item > <span className="secTex">I'm from:</span> {capFirtsLett(jemerDataLocal?.city)} {jemerDataLocal?.country}</Item>
                    </Grid>

                    <Grid item xs={4}>
                      <Item><span className="secTex">Age:</span> {jemerDataLocal?.age}</Item>
                      <Item className="itemConected"><span className="secTex">Gender: </span>{capFirtsLett(jemerDataLocal?.gender)}</Item>
                      <FriendsJams><span className="secTex">--See My:</span> <Button size="small">Jam-Events</Button> <Button size="small">Friends</Button> </FriendsJams>
                    </Grid>

                    <Grid item xs={6}>
                      <Item> <span className="secTex"> Music Geners: </span>{capFirtsLett(jemerDataLocal?.musicalGaners[0])}{" "}
              
                      </Item>
                    </Grid>

                    <Grid item xs={6}>
                      <Item> <span className="secTex">I'm playing: </span> {capFirtsLett(jemerDataLocal?.musicalInstruments[0])}{" "}
         
                      </Item>
                    </Grid>

                    <Grid item xs={8}>
                      <ItemOboutMe> <span className="secTex">Obout Me:</span><br></br><br></br> {capFirtsLett(jemerDataLocal?.oboutMe)}</ItemOboutMe>
                    </Grid>

                    <Grid item xs={4}>
                      <ItemInflu><span className="secTex"> References: </span><br></br><br></br> {capFirtsLett(jemerDataLocal?.references)}</ItemInflu>
                    </Grid>

                  </Grid>
                </Box>

              </CardContent>



              {globalUserId != jemerDataLocal._id ? 
              <CardActions>
                <Button size="small">Invite to jam-evant</Button>
                <Button size="small">Add to friends</Button>
                <Button size="small">Send Message</Button>
                <Button size="small">unfriend</Button>
              </CardActions> :  
              <CardActions>
                <Button size="small">Edit Profile</Button>
  
              </CardActions>}




            </Card>

  </>
  );
}

export default JamerCard;
