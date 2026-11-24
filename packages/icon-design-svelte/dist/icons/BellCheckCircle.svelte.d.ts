import { SvelteComponent } from 'svelte';

export interface BellCheckCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellCheckCircle extends SvelteComponent<BellCheckCircleProps> {}
