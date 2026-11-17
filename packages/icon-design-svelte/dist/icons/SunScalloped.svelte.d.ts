import { SvelteComponent } from 'svelte';

export interface SunScallopedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunScalloped extends SvelteComponent<SunScallopedProps> {}
