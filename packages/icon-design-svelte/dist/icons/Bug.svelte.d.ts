import { SvelteComponent } from 'svelte';

export interface BugProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bug extends SvelteComponent<BugProps> {}
