import type { DefineComponent } from 'vue';

export interface GitPullRequestProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GitPullRequest: DefineComponent<GitPullRequestProps>;

export default GitPullRequest;
export { GitPullRequest };
