const handleAlphabeticInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Avoid typing special characters and numbers
    const allowedKeys = /^[a-zA-Z\s]*$/;
    if (!allowedKeys.test(event.key)) {
        event.preventDefault();
    }
};