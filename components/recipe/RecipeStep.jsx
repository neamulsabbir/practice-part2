const RecipeStep = ({ length, content }) => {
    return (
        <>
            <div className="step">
                <h3>Step {length + 1}</h3>
                <p>{content}</p>
            </div>
        </>
    );
};

export default RecipeStep;