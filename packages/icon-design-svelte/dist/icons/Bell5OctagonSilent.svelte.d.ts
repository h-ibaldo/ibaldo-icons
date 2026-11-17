import { SvelteComponent } from 'svelte';

export interface Bell5OctagonSilentProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell5OctagonSilent extends SvelteComponent<Bell5OctagonSilentProps> {}
