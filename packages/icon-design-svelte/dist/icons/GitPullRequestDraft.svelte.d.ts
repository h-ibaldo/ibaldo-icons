import { SvelteComponent } from 'svelte';

export interface GitPullRequestDraftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GitPullRequestDraft extends SvelteComponent<GitPullRequestDraftProps> {}
