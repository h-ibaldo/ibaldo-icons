import { SvelteComponent } from 'svelte';

export interface GitPullRequestXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GitPullRequestX extends SvelteComponent<GitPullRequestXProps> {}
