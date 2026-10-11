exports.handler = async (event) => {
    // Parse the form data
    const body = JSON.parse(event.body);
    const email = body.email;
    const password = body.password; // Note: The HTML form above only captures email. We need to add a password field. Let's update the HTML in the next step.

    // For now, we'll just return a success message
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Success', email: email })
    };
};
