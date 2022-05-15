import { useState, useEffect } from "react";

function Responses({ responseEntry, latestId, isLoading }) {

    return (
        <section className="responses">
            {latestId ? <p className="response__emphasize">Latest Response</p> : ''}
            {isLoading && <p className="response__alert">New Response is Delivering...</p>}
            {Object.keys(responseEntry).map((id) => {
                const content = responseEntry[id];
                const { prompt, engine, response } = content;
                return (
                    <article key={id} className={id === latestId ? "response__entry response__entry--first" : "response__entry"}>
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