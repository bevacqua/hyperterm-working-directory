const untildify = require('untildify');

const pull = value => value ? untildify(value) : process.env.HOME;
const push = cwd => store.dispatch({ type: 'SESSION_SET_CWD', cwd });

exports.middleware = store => next => action => {
  const { type } = action;

  if (type === 'CONFIG_LOAD' || type === 'CONFIG_RELOAD') {
    push(pull(action.config.workingDirectory));
  }

  next(action);
};
