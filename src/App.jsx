import Responses from './Responses';
import Presets from './Presets';

import './App.css';
import './Icons.css';

import { useEffect, useState } from 'react';
import { fetchResponse } from './services';
import { MESSAGES } from './errors';

function App() {
  const initialInput = {
    engine: "",
    prompt: "",
  };

  const [userInput, setUserInput] = useState(initialInput);
  const [error, setError] = useState('');
  const [preset, setPreset] = useState('');
  const [responseEntry, setResponseEntry] = useState({});
  const [isLoading, setIsLoading] = useState(false);


  useEffect(
    () => {
      const { engine, prompt } = userInput;
      if (prompt) {
        fetchFromOpenAI(engine, prompt);
      }
    },
    [userInput]
  );


  const handleFormData = (e) => {
    e.preventDefault();

    setUserInput({
      ...userInput,
      engine: e.target.engine.value,
      prompt: e.target.prompt.value,
    });

    e.target.reset();
    setPreset('');
  };

  const fetchFromOpenAI = (engine, prompt) => {

    setIsLoading(true);

    fetchResponse(engine, prompt)
      .then(serviceData => {
        const { choices, id, model } = serviceData;
        const responseMessage = choices[0]['text'];
        saveResponseEntry(id, prompt, model, responseMessage);

        setError('');

        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        let errCode = err['error'];
        setError(MESSAGES[errCode] || MESSAGES.genericError);

        setIsLoading(false);
      });
  }

  function saveResponseEntry(id, userPrompt, model, responseMessage) {
    setResponseEntry({
      [id]: {
        prompt: userPrompt,
        engine: model,
        response: responseMessage,
      },
      ...responseEntry,
    });
  };

  return (
    <div className="app">
      <div className="user">
        <h1 className="title">Fun with AI</h1>
        <Presets setPreset={setPreset} />
        <form
          method="POST"
          className="form"
          onSubmit={(e) => handleFormData(e)}
        >
          <label className="form__label">
            <span className=" form__instruction">Select Your <span className="form__emphasize">AI engine</span> below: </span>
            <select className="forms__input" name="engine" defaultValue="text-curie-001">
              <option value="text-curie-001">text-curie-001</option>
              <option value="text-ada-001">text-ada-001</option>
              <option value="curie">curie</option>
              <option value="ada">ada</option>
            </select>
          </label>

          <label>
            <p className="form__instruction">Enter prompt and see the AI response <span className="form__emphasize">below</span>!</p>
            <textarea
              className="form__prompt"
              name="prompt"
              rows="5" cols="36"
              defaultValue={preset}
              required />
          </label>
          {isLoading ? (
            <button
              type="submit"
              className="btn"
            >
              <div className="gg-spinner-two"></div>
            </button>
          ) : (
            <button
              type="submit"
              className="btn"
            >
              Submit
            </button>
          )}
        </form>
      </div>

      <div className="ai">
        <h1 className="title">AI Responses</h1>
        {error ? (<div className="status">{error}</div>) : ''}
        <Responses responseEntry={responseEntry} />
      </div>
    </div>
  );
}

export default App;
