import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system'
import GoogleIcon from "../../../assets/img/google-icon.svg";
import { useGoogleLogin } from "../../../app/auths";

export default function UserLogin() {
	const { googleLogin, isGoogleLoading} = useGoogleLogin();

	return (
		<Box sx={{
            width: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '25vh auto',
            backgroundColor: '#dfe4ea'
        }}>
			<Box my={3} mx={2} sx={{ width: '100%'}}>
				<Typography mb={2} sx={{ textAlign: 'center', fontSize: 32 }}>Homestays System</Typography>
		    	<h3 style={{textAlign: 'center'}}>Best quality, best price</h3>
            	<Button
                    variant='contained'
                    fullWidth
                    color='success'
                    size='small'
                    sx={{ marginTop: 2 }}
					isLoading={isGoogleLoading}
					onClick={() => googleLogin()}
				>
					<img
						style={{ height: "28px", marginRight: "4px" }}
						src={GoogleIcon}
						alt="Google"
					/>
					Sign in with Google
				</Button>
			</Box>
		</Box>
	);
}
