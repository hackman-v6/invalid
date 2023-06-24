import Campaigns from "../components/Campaigns";
import CreateCampaign from "../components/CreateCampaign";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { Box } from '@mui/system';
import { useNavigate } from "react-router-dom";
import { Typography } from '@mui/material';
import { Grid, Button } from '@mui/material';
import SubNavbar from "../components/Navbars/subNavbar";
import Footer from "../components/Footers/MainFooter";

function Swap({ token }) {
  const { isConnected } = useAccount();
  let navigate = useNavigate();
  function handleLogout() {
    sessionStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div>
      <SubNavbar />
    <Box
      sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      py: 8,
      background: 'linear-gradient(to bottom, #000000, #2C003E, #000000)',
      }}
    >
      <Typography
        variant="h3"
        align="left"
        sx={{
        display: 'flex',
        justifyContent: 'center',
        fontSize: {
        xs: '0.875rem',  // text-sm
        sm: '1rem',      // sm:text-base
        md: '2.125rem',  // md:text-3xl
        lg: '2.5rem',    // lg:text-4xl
        },
        paddingTop: 4,
        paddingBottom: 3,
        }}
        >     
       Welcome back, {token.user.user_metadata.first_name}

      </Typography>       
      <Button variant="contained" onClick={handleLogout}>Logout</Button>
      <Typography
        variant="h1"
        align="center"
        sx={{
        display: 'flex',
        justifyContent: 'center',
        fontSize: {
        xs: '0.875rem',  // text-sm
        sm: '1rem',      // sm:text-base
        md: '2.125rem',  // md:text-3xl
        lg: '2.5rem',    // lg:text-4xl
        },
        paddingTop: 3,
        paddingBottom: 5,
        }}
        >
        Crowdfunding 💜 Show love and enter your campaign details!
        </Typography>

        <Grid container justifyContent="center">
        <ConnectButton
          showBalance={false}
          accountStatus={{
            smallScreen: "avatar",
            largeScreen: "full",
          }}
        />
      </Grid>

      {!isConnected ? (
        <Typography
        variant="body1"
        align="center"
        fontWeight="bold"
        fontSize="1.75rem" // text-xl
        my={8}
      >
          Please connect to wallet
        </Typography>
      ) : (
        <>
          <Grid container spacing={6} mt={8}>
          <Grid item xs={12}>
            <Grid container justifyContent="center">
              <Grid item>
                <CreateCampaign />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

          <div className="flex gap-6 mt-8">
            <div className="flex flex-col">
              <Campaigns />
            </div>
          </div>
        </>
      )}
    </Box>
      <Footer />
    </div>
  );
}

export default Swap;
