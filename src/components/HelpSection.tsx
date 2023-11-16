const HelpSection = () => {
    return (
        <>
            <div className="flex flex-col mb-7">
                <h1 className="text-4xl self-center font-bold mb-4 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">How to Use the Application</h1>
                <p className="text-gray-700 text-xl">
                    1. To search for a country, start typing its name in the input field. As you type, you'll see suggestions.
                    Click on a 'Get details' button to view details about the selected country.
                </p>
                <p className="text-gray-700 text-xl my-3">
                    2. You can also clear the search results by removing all text from the input field and the results will be cleared.
                </p>
                <p className="text-gray-700 text-xl font-semibold">
                    Tip: We'll start looking for matches with a minimum of 2 characters.
                </p>
            </div>
        </>
    );
};
export { HelpSection };