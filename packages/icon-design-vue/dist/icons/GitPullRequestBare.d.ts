import type { DefineComponent } from 'vue';

export interface GitPullRequestBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GitPullRequestBare: DefineComponent<GitPullRequestBareProps>;

export default GitPullRequestBare;
export { GitPullRequestBare };
