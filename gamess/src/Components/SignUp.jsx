// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './SignupForm.css';

// function SignupForm() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const response = await fetch('http://localhost:3000/signup', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ username, password }),
//         });
//         if (response.ok) {
//             alert('Sign-up successful!');
//             navigate('/hub');
//         } else {
//             alert('Sign-up failed. Please try again.');
//         }
//     };

//     return (
//         <div className="signup-container">
//             <form onSubmit={handleSubmit} className="signup-form">
//                 <h2>Sign Up</h2>
//                 <label>
//                     Username:
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                     />
//                 </label>
//                 <label>
//                     Password:
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </label>
//                 <button type="submit">Sign Up</button>
//             </form>
//         </div>
//     );
// }

// export default SignupForm;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './SignupForm.css';

// function SignupForm() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const response = await fetch('http://localhost:3000/signup', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email, password }),
//         });
//         if (response.ok) {
//             alert('Sign-up successful!');
//             navigate('/hub');
//         } else {
//             alert('Sign-up failed. Please try again.');
//         }
//     };

//     return (
//         <div className="container">
//             <div className="left-panel">
//                 <h1 className="title-text">PIXEL PLAY</h1>
//                 <img src="https://i.postimg.cc/XNHqQdvf/logo.png" alt="Pixel Play Logo" className="logo" />
//                 <h2 className="title-text">FREE ONLINE GAMES</h2>
//             </div>
//             <div className="right-panel">
//                 <div className="signup-form">
//                     <h2><b>Create a New Account</b></h2>
//                     <form onSubmit={handleSubmit}>
//                         <label htmlFor="email"><b>Email</b></label>
//                         <input
//                             type="email"
//                             id="email"
//                             placeholder="you@example.com"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
                        
//                         <label htmlFor="password"><b>Password</b></label>
//                         <input
//                             type="password"
//                             id="password"
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
                        
//                         <button type="submit">Sign Up</button>
//                     </form>
//                     <p>Already have an account? <a href="#" onClick={() => navigate('/login')}>Login here</a></p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SignupForm;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './SignupForm.css';

// function SignupForm() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const response = await fetch('http://localhost:3000/signup', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email, password }),
//         });
//         if (response.ok) {
//             alert('Sign-up successful!');
//             navigate('/hub');
//         } else {
//             alert('Sign-up failed. Please try again.');
//         }
//     };

//     return (
//         <div className="container">
//             <div className="left-panel">
//                 {/* <h1 className="title-text">PIXEL PLAY</h1>  */}
//                 <img src="https://i.postimg.cc/PxxPv4YG/Screenshot-2024-11-13-163651.png" alt="Pixel Play Logo" className="logo" />
//                 {/* <h2 className="title-text">FREE ONLINE GAMES</h2> */}
//             </div>
//             <div className="right-panel">
//                 <div className="signup-form">
//                     <h2><b>Create a New Account</b></h2>
//                     <form onSubmit={handleSubmit}>
//                         <label htmlFor="email"><b>Email</b></label>
//                         <input
//                             type="email"
//                             id="email"
//                             placeholder="you@example.com"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
                        
//                         <label htmlFor="password"><b>Password</b></label>
//                         <input
//                             type="password"
//                             id="password"
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
                        
//                         <button type="submit">Sign Up</button>
//                     </form>
//                     <p>Already have an account? <a href="#" onClick={() => navigate('/login')}>Login here</a></p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SignupForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupForm.css';

function SignupForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }), // Sending username instead of email
        });
        if (response.ok) {
            alert('Sign-up successful!');
            navigate('/hub');
        } else {
            alert('Sign-up failed. Please try again.');
        }
    };

    return (
        <div className="container">
            <div className="left-panel">
            <h2 className="title-text">WELCOME TO PIXEL PLAY</h2>
                
                <img src="https://i.postimg.cc/Px6Wcy1K/Screenshot-2024-11-13-205407.pngg" alt="Pixel Play Logo" className="logo" />
            </div>
            <div className="right-panel">
                <div className="signup-form">
                    <h2><b>Create a New Account</b></h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username"><b>Username</b></label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        
                        <label htmlFor="password"><b>Password</b></label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        
                        <button type="submit">Sign Up</button>
                    </form>
                    <p>Already have an account? <a href="#" onClick={() => navigate('/login')}>Login here</a></p>
                </div>
            </div>
        </div>
    );
}

export default SignupForm;
