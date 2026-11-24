import type { DefineComponent } from 'vue';

export interface GitPullRequestPlusBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GitPullRequestPlusBare: DefineComponent<GitPullRequestPlusBareProps>;

export default GitPullRequestPlusBare;
export { GitPullRequestPlusBare };
