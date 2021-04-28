module.exports = {
  types: [
    { value: 'feat', name: 'feat:     add a feature😁' },
    { value: 'fix', name: 'fix:      fix a bug😁' },
    { value: 'docs', name: 'docs:     modify doc😁' },
    {
      value: 'style',
      name: 'style:   change code style😁'
    },
    {
      value: 'refactor',
      name: 'refactor: refactor code😁'
    },
    { value: 'perf', name: 'perf:     improve performance😁' },
    { value: 'test', name: 'test:     change test file😁' },
    {
      value: 'build',
      name:
        'build:    build tool file😁'
    },
    { value: 'ci', name: 'ci:       change ci😁' },
    {
      value: 'chore',
      name: 'chore:    change build process😁'
    },
    { value: 'revert', name: 'revert:   revert commit😁' }
  ],

  scopes: [
    ['components', 'Component related'],
    ['hooks', 'hook related'],
    ['utils', 'utils related'],
    ['element-ui', 'change element-ui'],
    ['styles', 'style related'],
    ['deps', 'dependency related'],
    ['auth', 'auth related'],
    ['other', 'other'],

    ['custom', 'None of the above? I am going to customize it']
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    }
  }),

  // allowCustomScopes: true,

  // allowTicketNumber: false,
  // isTicketNumberRequired: false,
  // ticketNumberPrefix: 'TICKET-',
  // ticketNumberRegExp: '\\d{1,5}',

  /*
  scopeOverrides: {
    fix: [
      { name: 'merge' },
      { name: 'style' },
      { name: 'e2eTest' },
      { name: 'unitTest' }
    ]
  },
  */

  // Interactive prompt message
  messages: {
    type: 'Make sure this commit is Angular style! \nSelect the type you want to submit:',
    scope: '\nSelect a Scope (optional) :',
    customScope: 'Please enter a custom scope:',
    subject: 'Fill in a short and concise description of the change:\n',
    body: 'Fill in a more detailed change description (optional). use "|" for new line\n',
    breaking: 'List non-compatible major changes (optional) :\n',
    footer: 'List ISSUES CLOSED (optional) for all changes. For example: #31, #34:\n',
    confirmCommit: 'Confirm commit?'
  },

  allowBreakingChanges: ['feat', 'fix'],

  // skipQuestions: ['body', 'footer'],

  subjectLimit: 100,
  breaklineChar: '|'
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true,
}
