// Add only reviewed public HTTPS destinations here, then set enabled to true.
// Until both conditions are met, the website shows an honest unavailable state.
window.AMT01_CONFIG = Object.freeze({
  links: {
    repository: {
      enabled: false,
      url: '',
      label: 'Open the GitHub project',
      unavailableLabel: 'Repository not yet public',
      availableNote: 'Opens the public AMT-01 repository in a new tab.',
      unavailableNote: 'The repository link will appear here when the public release is ready.',
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
    contribution: {
      enabled: false,
      url: '',
      label: 'Choose a contribution type',
      unavailableLabel: 'Contributions open with the repository',
      availableNote: 'Uses a guided public template. Submissions are reviewed before entering the project record.',
      unavailableNote: 'A contribution is reviewed before it enters the project record.',
      newTab: true
    },
    privateIntake: {
      // Change this only after the privacy, consent, storage, retention,
      // redaction, and takedown workflow has been reviewed and deployed.
      enabled: false,
      url: '',
      label: 'Continue to private intake',
      unavailableLabel: 'Not accepting personal reports yet',
      availableNote: 'Separate from public discussion. Review the privacy and consent terms before sending anything.',
      unavailableNote: 'Please do not send personal reports or media through public channels.',
      newTab: true
    }
  }
});
