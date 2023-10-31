# bun

![Bun](./img/logo-square.jpg)

Learning for 🍞Bun

Install

```zsh
➜  workspace git:(main) ✗ curl -fsSL https://bun.sh/install | zsh
```

vim ~/.zshrc

```zsh
# bun
export BUN_INSTALL="$HOME/.bun"
export PATH=$BUN_INSTALL/bin:$PATH
```

version up

```zsh
➜  workspace git:(main) ✗ bun upgrade
Congrats! You're already on the latest version of bun (which is v1.0.7)upgrade
```

Make project

```zsh
➜  workspace git:(main) ✗ bun init
bun init helps you get started with a minimal project and tries to guess sensible defaults. Press ^C anytime to quit

package name (workspace): bun-test
entry point (index.ts): index.ts

Done! A package.json file was saved in the current directory.
 + index.ts
 + tsconfig.json (for editor auto-complete)

To get started, run:
  bun run index.ts
```

develop command

```zsh
bun --watch index.ts
```

deploy command

```zsh
bun run index.ts
```

package install command

```zsh
bun install package-name
bun add package-name
```

References:

https://bun.sh/
https://reffect.co.jp/bun/bun-beginner/

SiBun
