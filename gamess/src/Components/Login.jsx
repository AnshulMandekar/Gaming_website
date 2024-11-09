//1) bhaiya ka code
// import React, { useState } from 'react';

// function LoginForm() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const response = await fetch('http://localhost:3000/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ username, password }),
//         });

//         if (response.ok) {
//             alert('Login successful!');
//         } else {
//             alert('Login failed. Please try again.');
//         }
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Username:
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                     />
//                 </label>
//                 <br />
//                 <label>
//                     Password:
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </label>
//                 <br />
//                 <button type="submit">Login</button>
//             </form>
//             <div>
//                 <h5>do not have an account?</h5>
//             </div>
//         </div>
//     );
// }

// export default LoginForm;


//-----------------------------------------
//Code number 2


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function LoginForm() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const response = await fetch('http://localhost:3000/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ username, password }),
//         });

//         if (response.ok) {
//             alert('Login successful!');
//         } else {
//             alert('Login failed. Please try again.');
//         }
//     };

//     const handleSignUpRedirect = () => {
//         navigate('/signup');
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Username:
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                     />
//                 </label>
//                 <br />
//                 <label>
//                     Password:
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </label>
//                 <br />
//                 <button type="submit">Login</button>
//             </form>
//             <p>
//                 Don’t have an account? <button onClick={handleSignUpRedirect}>Sign Up</button>
//             </p>
//         </div>
//     );
// }

// export default LoginForm;

//-------------------------------------------------------------
//perfect code

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function LoginForm() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const response = await fetch('http://localhost:3000/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ username, password }),
//         });
//         if (response.ok) {
//             alert('Login successful!');
//             navigate('/');
//         } else {
//             alert('Login failed. Please try again.');
//         }
//     };

//     const handleSignUpRedirect = () => navigate('/signup');

//     return (
//         <div>
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Username:
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                     />
//                 </label>
//                 <br />
//                 <label>
//                     Password:
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </label>
//                 <br />
//                 <button type="submit">Login</button>
//             </form>
//             <p>
//                 Do not have an account? <button onClick={handleSignUpRedirect}>Sign Up</button>
//             </p>
//         </div>
//     );
// }

// export default LoginForm;

// ------------------------------------
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// function LoginForm() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const response = await fetch('http://localhost:3000/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ username, password }),
//         });

//         if (response.ok) {
//             alert('Login successful!');
//             navigate('/hub'); // Redirect to GameHub.jsx after successful login
//         } else {
//             alert('Login failed. Please try again.');
//         }
//     };

//     const handleSignUpRedirect = () => navigate('/signup');

//     return (
//         <div>
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Username:
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                     />
//                 </label>
//                 <br />
//                 <label>
//                     Password:
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </label>
//                 <br />
//                 <button type="submit">Login</button>
//             </form>
//             <p>
//                 Do not have an account? <button onClick={handleSignUpRedirect}>Sign Up</button>
//             </p>
//         </div>
//     );
// }

// export default LoginForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Importing the CSS file for styling

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Making a POST request to the server for login
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        // If the login is successful, redirect to the GameHub page
        if (response.ok) {
            alert('Login successful!');
            navigate('/hub'); // Redirect to GameHub.jsx after successful login
        } else {
            alert('Login failed. Please try again.');
        }
    };

    // Redirect to SignUp page
    const handleSignUpRedirect = () => navigate('/signup');

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Login</h2>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
            <p >
                Do not have an account? <button onClick={handleSignUpRedirect}>Sign Up</button>
            </p>
        </div>
    );
}

export default LoginForm;

