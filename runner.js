const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijc1OGQxNmZjLWRjM2ItNDY4OS04MjQ2LThkOTgyNDE3OTZhMC0xNzI3MjI1MDEyNTIzIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMTZjMDQ5NDktMzRkYS00NzBkLTg1OWYtZDczMzc3MTk3NDZkIiwidHlwZSI6InQifQ.Wo8CfKOXK9_1Bi9n0v_AdhZNnN83Xq_yAYGE3pzgOrU'

cypress.run({
  video: true, // ativa a gravação de vídeos
  spec: 'cypress/e2e/*
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
