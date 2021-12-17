const core = require("@actions/core");


async function run() {
  try {
    const issueTitle = core.getInput("issue-title");
    const jokeBody = core.getInput("joke");
    const token = core.getInput("repo-token");


      console.log(issueTitle);
      console.log(jokeBody);
      console.log(token);

    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();