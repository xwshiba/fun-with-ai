## Project Description

This is a responsive web app that facilitates user interaction with AI models from OpenAI.

It has been hosted on [Heroku](https://fun-ai-response.herokuapp.com/). You can play with it and see how it works.

User can simply send texts through the app and ai responses will be displayed in the "AI Response" section. The correspondences are sorted from latest to oldest.

**Engine**: user can also choose their own AI engine. Each engine will respond differently in terms of responding time. I only provided a few engine options that have cheap prices.

**Presets**: user can choose three preset prompts to get an idea of the interaction.

## Loading Indicator

This site contains two loading indicators.
- A spinner will show up in the submit button when user submitting the information.
- A message will show up when new response from AI is coming in.

## License

- The spinner icon is from [css.gg](https://css.gg/).
  - MIT License information can be found [here](https://css.gg/doc/licence).

## Accessibility

- Any element that needs to gain focus (such as an input field or a button) have a minimum height/width of 54px or equivalent.

- All interactions can be done with keyboard, in addition to any mouse support.

- The site have WCAG level AA color contrast.

- ARIA: no added ARIA labels.

## Notes For Developers

### Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The code is runnable with `npm install; npm run build; npx serve -s build` in this react project directory.

### API Token
API token is **not** included. You can get your own from the OpenAI platform and name it accordingly to the variable name in `services.js`.

### CSS
- The web app is responsive.
- The web app is using mobile-first approach.
- The CSS class names are using BEM style.
