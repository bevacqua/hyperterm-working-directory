const untildify = require('untildify');
const pids = new Map();
let currentPid;
let cwd;

const pull = value => {
  cwd = value ? untildify(value) : process.env.HOME;
};
const push = () => store.dispatch({ type: 'SESSION_SET_CWD', cwd });

exports.middleware = store => next => action => {
  const { type } = action;

  if (type === 'CONFIG_LOAD') {
    pull(action.config.workingDirectory);
    push();
  }

  if (type === 'SESSION_ADD') {
    pids.set(action.uid, action.pid);
  }

  if (type === 'SESSION_ADD' || type === 'SESSION_SET_ACTIVE') {
    currentPid = pids.get(action.uid);
  }

  if (type === 'SESSION_PTY_DATA' && currentPid && currentPid === pids.get(action.uid)) {
    push();
  }

  if (type === 'SESSION_PTY_EXIT' || type === 'SESSION_USER_EXIT') {
    pids.delete(action.uid);
  }

  next(action);
};
