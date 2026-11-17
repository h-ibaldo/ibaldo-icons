import { SvelteComponent } from 'svelte';

export interface BellCheckCircleRimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellCheckCircleRim extends SvelteComponent<BellCheckCircleRimProps> {}
