import { SvelteComponent } from 'svelte';

export interface AtCheckCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtCheckCircle extends SvelteComponent<AtCheckCircleProps> {}
