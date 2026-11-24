import type { DefineComponent } from 'vue';

export interface GitPullRequestClosedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GitPullRequestClosed: DefineComponent<GitPullRequestClosedProps>;

export default GitPullRequestClosed;
export { GitPullRequestClosed };
