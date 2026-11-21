import { SvelteComponent } from 'svelte';

export interface GitPullRequestClosedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GitPullRequestClosed extends SvelteComponent<GitPullRequestClosedProps> {}
