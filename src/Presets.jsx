function Presets({ setPreset }) {
    const presetsMessages = [
        "give me a description about an AI chatbot",
        "write me a poem about the Seattle rainy weather",
        "tell me a love story that happened in Seattle"
    ];

    return (
        <section className="presets">
            <p className="presets__instruction">Feel free to choose a prompt: </p>
            {presetsMessages.map((message, index) => {
                return (
                    < button
                        key={index}
                        className="presets__btn btn"
                        onClick={() => setPreset(message)}
                    > {message}</button>
                )
            })}
        </section >
    );
}

export default Presets;