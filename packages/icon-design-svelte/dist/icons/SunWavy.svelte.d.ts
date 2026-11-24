import { SvelteComponent } from 'svelte';

export interface SunWavyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunWavy extends SvelteComponent<SunWavyProps> {}
