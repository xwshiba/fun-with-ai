export function fetchResponse(engine, userInput) {

    const data = {
        prompt: userInput,
        temperature: 0.5,
        max_tokens: 200,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    };

    return new Promise((resolve) => {
        // This inserts a 2 second delay so we can easily see a spinner at work
        setTimeout(resolve, 1000);
    })
        .then(
            () => fetch(`https://api.openai.com/v1/engines/${engine}/completions`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET
                        }`,
                },
                body: JSON.stringify(data),
            })
        )
        .catch(() => Promise.reject('networkError'))
        .then(response => {
            if (response.ok) {
                return response.json();
            };
            return Promise.reject('serviceError');
        });
};