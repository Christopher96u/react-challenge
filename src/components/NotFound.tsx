interface NotFoundProps {
    errorMessage: string;
}

const NotFound = ({ errorMessage }: NotFoundProps) => {
    return (
        <>
            <h1 className="text-center text-lg text-gray-500">{errorMessage}</h1>
        </>
    );
};
export { NotFound };