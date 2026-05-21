/**
 * @swayloop/commitlint-config
 *
 * Conventional Commits 기반 swayloop 공통 commitlint 설정.
 * 자세한 규칙: https://github.com/swayloop/.github/blob/main/docs/workflow.md#커밋-메시지
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // swayloop 표준 타입. config-conventional 의 기본 목록과 동일하지만
    // 명시적으로 박아두어 규칙을 문서화한다.
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'refactor',
        'docs',
        'chore',
        'test',
        'perf',
        'ci',
        'style',
        'build',
        'revert',
      ],
    ],
    // 한국어 subject 도 자주 쓰므로 case 규칙은 끈다 (기본은 lower-case 강제).
    'subject-case': [0],
    // subject 최대 길이는 100자까지 허용 (한국어가 평균적으로 더 길어서)
    'subject-max-length': [2, 'always', 100],
  },
};
