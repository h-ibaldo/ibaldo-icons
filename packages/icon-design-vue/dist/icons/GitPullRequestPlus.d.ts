import type { DefineComponent } from 'vue';

export interface GitPullRequestPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GitPullRequestPlus: DefineComponent<GitPullRequestPlusProps>;

export default GitPullRequestPlus;
export { GitPullRequestPlus };
