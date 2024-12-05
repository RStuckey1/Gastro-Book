import { type MouseEvent } from 'react';
import Auth from '../../utils/auth';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
    const logout = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <AppBar position="static">
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Box>
                    <Typography variant="h4" sx={{ textDecoration: 'none', color: 'inherit' }}>
                        Tech Thoughts
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontStyle: 'italic', marginTop: '0.5rem' }}>
                        Get into the mind of a programmer.
                    </Typography>
                </Box>
                <Box>
                    {Auth.loggedIn() ? (
                        <>
                            <Button
                                variant="contained"

                                href="/me"
                                sx={{ margin: '0 0.5rem' }}
                            >
                                {Auth.getProfile().data.username}'s Profile
                            </Button>
                            <Button
                                variant="outlined"

                                onClick={logout}
                                sx={{ margin: '0 0.5rem' }}
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                variant="contained"

                                href="/login"
                                sx={{ margin: '0 0.5rem' }}
                            >
                                Login
                            </Button>
                            <Button
                                variant="outlined"

                                href="/signup"
                                sx={{ margin: '0 0.5rem' }}
                            >
                                Signup
                            </Button>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
// import { Link } from 'react-router-dom';
// import { type MouseEvent } from 'react';
// import Auth from '../../utils/auth';

// const Header = () => {
//   const logout = (event: MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//     // Logs the user out by calling the logout method from Auth
//     Auth.logout();
//   };
//   return (
//     <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
//       <div className="container flex-row justify-space-between-lg justify-center align-center">
//         <div>
//           <Link className="text-light" to="/">
//             <h1 className="m-0">Tech Thoughts</h1>
//           </Link>
//           <p className="m-0">Get into the mind of a programmer.</p>
//         </div>
//         <div>
//           {/* Checking if the user is logged in to conditionally render profile link and logout button */}
//           {Auth.loggedIn() ? (
//             <>
//               <Link className="btn btn-lg btn-info m-2" to="/me">
//                 {/* Retrieving the logged-in user's profile to display the username */}
//                 {Auth.getProfile().data.username}'s profile
//               </Link>
//               <button className="btn btn-lg btn-light m-2" onClick={logout}>
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link className="btn btn-lg btn-info m-2" to="/login">
//                 Login
//               </Link>
//               <Link className="btn btn-lg btn-light m-2" to="/signup">
//                 Signup
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
