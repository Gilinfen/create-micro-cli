const obj = {
  feat: '🌈',
  fix: '🐛',
  update: '⚡️',
  docs: '🎓',
  chore: '💢',
  refactor: '🚀'
}

console.log('a')
const keys = Object.keys(obj)

module.exports = {
  // https://www.yuque.com/arvinxx-fe/workflow/commitlint-config-gitmoji-guide
  extends: ['@commitlint/config-conventional'],
  rules: {
    //   TODO Add Scope Enum Here
    // 'scope-enum': [2, 'always', ['yourscope', 'yourscope']],
    'type-enum': [2, 'always', keys]
  }
}
