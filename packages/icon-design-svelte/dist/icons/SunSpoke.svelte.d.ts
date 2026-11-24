import { SvelteComponent } from 'svelte';

export interface SunSpokeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunSpoke extends SvelteComponent<SunSpokeProps> {}
