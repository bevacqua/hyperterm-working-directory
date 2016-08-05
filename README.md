# `hyperterm-working-directory`

> 🖥👷📂 Adds a default working directory setting. Opens new tabs using that working directory.

# usage

- Open `~/.hyperterm.js`
- Add `hyperterm-working-directory` to the list of `plugins`
- Set `config.workingDirectory` to something like `~/dev`

That's it. If `config.workingDirectory` is not set, a default value of `$HOME` will be used.

# info

Supports hot configuration reloads. When `config.workingDirectory` changes, new tabs opened in HyperTerm will recognize the new value.

This package is compatible with `hypercwd`. When `hypercwd` is installed, the configured `workingDirectory` will be used on first load and `hypercwd` will take over for tabs opened after that.

# license

mit
