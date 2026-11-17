# Experiment 10 — Deployment

## Static website on Netlify
1. Push your static project (for example Experiment 2) to GitHub.
2. Sign in at https://www.netlify.com/ and choose **Add new site → Import an existing project**.
3. Select the repository. For plain HTML set the publish directory to the folder containing `index.html`; build command can be blank.
4. Deploy. Every push can trigger a new deployment.

## Dynamic Node website
Deploy an Express project (such as Experiment 8) to a Node-compatible host such as AWS Elastic Beanstalk or another Node hosting service. Set the start command to `npm start`, configure environment variables in the host dashboard, and listen on `process.env.PORT`:

```js
const PORT = process.env.PORT || 3000;
app.listen(PORT);
```

Heroku's hosting model is now paid; follow the current provider documentation and pricing before choosing it. Never upload secrets or `.env` files.
