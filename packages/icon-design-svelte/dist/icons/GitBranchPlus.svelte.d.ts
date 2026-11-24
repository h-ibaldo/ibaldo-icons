import { SvelteComponent } from 'svelte';

export interface GitBranchPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GitBranchPlus extends SvelteComponent<GitBranchPlusProps> {}
