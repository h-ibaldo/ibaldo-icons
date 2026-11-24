import { SvelteComponent } from 'svelte';

export interface GitConflictProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GitConflict extends SvelteComponent<GitConflictProps> {}
