const correctLogPathRule = require('../src/rules/correct-log-path')
const RuleTester = require('eslint').RuleTester

const ruleTester = new RuleTester()

ruleTester.run('correct-log-path', correctLogPathRule, {
  valid: [
    {
      code: 'var log = new Log(\'app.Modules.About.Api.ApplicationVersion\')',
      filename: '/Users/erik/technology-studio/org.bitbucket.technology-studio.itcrew-pro-react-native/app/Modules/About/Api/ApplicationVersion.ts'
    },
    {
      code: 'var log = new Log(\'app.Modules.About.Components.AboutApplicationPureComponent\')',
      filename: 'app/Modules/About/Components/AboutApplicationPureComponent.tsx'
    },
  ],
  invalid: [
    {
      code: 'var log = new Log(\'app.Modules.About.Api.ApplicationVersion.ts\')',
      filename: '/Users/erik/technology-studio/org.bitbucket.technology-studio.itcrew-pro-react-native/app/Modules/About/Api/ApplicationVersion.ts',
      errors: [{ message: 'Log path should be app.Modules.About.Api.ApplicationVersion.' }],
      output: 'var log = new Log(\'app.Modules.About.Api.ApplicationVersion\')',
    },
    {
      code: 'var log = new Log(\'Modules.About.Api.ApplicationVersion\')',
      filename: '/Users/erik/technology-studio/org.bitbucket.technology-studio.itcrew-pro-react-native/app/Modules/About/Api/ApplicationVersion.ts',
      errors: [{ message: 'Log path should be app.Modules.About.Api.ApplicationVersion.' }],
      output: 'var log = new Log(\'app.Modules.About.Api.ApplicationVersion\')',
    },
  ],
})
