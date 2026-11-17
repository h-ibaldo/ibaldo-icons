import { SvelteComponent } from 'svelte';

export interface Bell2OctagonSilentProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell2OctagonSilent extends SvelteComponent<Bell2OctagonSilentProps> {}
