// Inside your ForgotPassword component
import React, { useState } from 'react';

function ForgotPassword() {
    const [emailOrUsername, setEmailOrUsername] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            // Here, you would usually make an API call to your backend
            // Send the email or username to the server to initiate the password reset process
            
            // For example (not a complete implementation, just an illustration):
            const response = await fetch('/api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ emailOrUsername }),
            });

            if (response.ok) {
                // Password reset initiated successfully
                // You might display a success message or redirect the user to a confirmation page
                console.log('Password reset initiated successfully');
            } else {
                // Handle error response from the server
                console.error('Password reset failed');
            }
        } catch (error) {
            console.error('Password reset error:', error);
        }
    };

    return (
        <>
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Forgot Password</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Enter your email or username"
                            value={emailOrUsername}
                            onChange={(e) => setEmailOrUsername(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn">
                        Reset Password
                    </button>
                </form>
            </div>
        </>
    );
}

export default ForgotPassword;
