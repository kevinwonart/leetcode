# 12-Week LeetCode Study Plan

I am following the **12-week LeetCode study plan** outlined by Dave Burji to enhance my problem-solving skills and prepare for coding interviews. 
Started on 03/04/2024

## Study Plan Overview

The plan is well-structured and spread over 12 weeks, targeting different topics essential for coding interviews. Each week focuses on specific types of problems, gradually increasing in complexity.

## Resources

- **Video Guide**: [Dave Burji's LeetCode Study Plan](https://www.youtube.com/watch?v=UKP-Vca9Q4c&t) provides a comprehensive overview and tips for effectively tackling the problems week by week.

- **Notion Doc**: The [original study plan](https://ubiquitous-dragonfly-2fd.notion.site/12-Week-Leetcode-Preparation-Guide-e8e0b24383f54b0fb52832ef99b42c34) on Notion outlines the weekly topics and includes additional resources and problem sets.

- **My Notion Doc**: I have also created a [personalized study guide](https://jasper-jonquil-692.notion.site/12-Week-Leetcode-Preparation-Guide-ae1d34143b1d49aa981e0901d86d7f6a?pvs=4) that adapts the original plan to my progress and reflections and including tests.

## My Environment Setup
### TypeScript Installation and Configuration

1. **Install TypeScript**: To get started with TypeScript, you need to install it globally or in app. You can do this using npm (Node Package Manager) with the following command:

   ```bash
   npm install -g typescript
   or
   npm install -D typescript
   ```

# Initialize a new TypeScript configuration file (tsconfig.json)
  ```bash
  tsc --init
  ```
# Now, open tsconfig.json and update the following settings for rootDir and outDir
# You can manually edit the tsconfig.json file to include these lines:

  ```bash
   "rootDir": "./src",
   "outDir": "./dist",
  ```

# To continuously watch and compile your TypeScript files, use:

  ```bash
  tsc --watch
  ```

# Ensure you have Node.js version 18.11 or higher for node --watch
# Check your Node version using:

  ```bash
  node -v
  ```

# If needed, download the latest version of Node.js from https://nodejs.org/

# To run your JavaScript file with Node.js, use:
#
  ```
  node --watch <./dist/pathToJsFile>
  ```

## Testing
#results can be watched and checked while working in the environment in real-time with typescript watch and node js watch
  ```typescript
  console.assert(solutionFunction(..args) === expectedResult, `expects <RESULT> | Returned $`{solutinFunction(...args)}`;
  ```
## Acknowledgements

Special thanks to Dave Burji for creating and sharing this valuable study plan.

