import { SvelteComponent } from 'svelte';

export interface BugOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BugOff extends SvelteComponent<BugOffProps> {}
