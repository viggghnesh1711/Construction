
export const EmailTemplate = ({ name, email, message }) => (
    <div>
        <h1>New Message from {name}</h1>
        <p>Email: {email}</p>
        <p>Message:</p>
        <p>{message}</p>
    </div>
);