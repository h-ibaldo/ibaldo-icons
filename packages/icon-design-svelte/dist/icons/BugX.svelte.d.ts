import { SvelteComponent } from 'svelte';

export interface BugXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BugX extends SvelteComponent<BugXProps> {}
