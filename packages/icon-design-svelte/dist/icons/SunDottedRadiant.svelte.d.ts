import { SvelteComponent } from 'svelte';

export interface SunDottedRadiantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunDottedRadiant extends SvelteComponent<SunDottedRadiantProps> {}
