function Responses({ responseEntry }) {

    return (
        <section className="responses">
            {Object.keys(responseEntry).map((id) => {
                const content = responseEntry[id];
                const { prompt, engine, response } = content;

                return (
                    <article key={id} className="response__entry">
                        <p><span className="response__tag">Prompt: </span>{prompt}</p>
                        <p><span className="response__tag">Engine: </span>{engine}</p>
                        <p><span className="response__tag">Response: </span>{response}</p>
                    </article>
                )
            })}
        </section>
    );
}

export default Responses;