import type { DefineComponent } from 'vue';

export interface GitPullRequestDraftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GitPullRequestDraft: DefineComponent<GitPullRequestDraftProps>;

export default GitPullRequestDraft;
export { GitPullRequestDraft };
