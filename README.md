# @swayloop/commitlint-config

swayloop org 공통 commitlint 설정. Conventional Commits 기반.

## 설치

```bash
pnpm add -D @swayloop/commitlint-config @commitlint/cli @commitlint/config-conventional husky
```

## 사용

`commitlint.config.js`:

```js
module.exports = {
  extends: ['@swayloop/commitlint-config'],
};
```

`.husky/commit-msg`:

```sh
. node_modules/@swayloop/commitlint-config/hooks/commit-msg
```

`.husky/pre-push`:

```sh
. node_modules/@swayloop/commitlint-config/hooks/pre-push
```

`package.json`:

```json
{
  "scripts": {
    "prepare": "husky"
  }
}
```

## 포함된 훅

- **commit-msg** — Conventional Commits 검증
- **pre-push** — 브랜치 네이밍 규칙 검증 (`<type>/<issue#>-<desc>`, main/dev 제외)

훅 정책이 바뀌면 `pnpm update @swayloop/commitlint-config` 한 번이면 모든 레포에 적용.

## 규칙

- 허용 타입: `feat`, `fix`, `refactor`, `docs`, `chore`, `test`, `perf`, `ci`, `style`, `build`, `revert`
- subject case: 강제 안 함 (한국어 허용)
- subject 최대 길이: 100자

자세한 워크플로우 가이드는 [swayloop/.github](https://github.com/swayloop/.github/blob/main/docs/workflow.md) 참고.

## License

MIT
