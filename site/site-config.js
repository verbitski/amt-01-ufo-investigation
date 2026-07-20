// Add only reviewed public HTTPS destinations here, then set enabled to true.
// Until both conditions are met, the website shows an honest unavailable state.
window.AMT01_CONFIG = Object.freeze({
  links: {
    repository: {
      enabled: true,
      url: 'https://github.com/verbitski/amt-01-ufo-investigation',
      label: 'Open the GitHub project',
      unavailableLabel: 'GitHub project temporarily unavailable',
      availableNote: 'Opens the public AMT-01 repository in a new tab.',
      unavailableNote: 'The GitHub project is temporarily unavailable.',
      newTab: true
    },
    discussions: {
      enabled: true,
      url: 'https://discord.gg/JVvHf5cXhs',
      label: 'Join the Discord community',
      unavailableLabel: 'Discord invitation unavailable',
      availableNote: 'Opens the public Discord server. A free Discord account is required to participate.',
      unavailableNote: 'The Discord invitation is temporarily unavailable.',
      newTab: true
    },
    privateIntake: {
      enabled: true,
      url: 'https://tally.so/r/5BgZMb',
      label: 'Share an observation privately',
      unavailableLabel: 'Private witness intake is temporarily unavailable',
      availableNote: 'Opens the private witness intake form on Tally in a new tab. Review the consent and privacy information before sending.',
      unavailableNote: 'Please do not send personal reports or media through public channels while the form is unavailable.',
      newTab: true
    }
  }
});
