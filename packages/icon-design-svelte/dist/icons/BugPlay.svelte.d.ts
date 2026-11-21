import { SvelteComponent } from 'svelte';

export interface BugPlayProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BugPlay extends SvelteComponent<BugPlayProps> {}
