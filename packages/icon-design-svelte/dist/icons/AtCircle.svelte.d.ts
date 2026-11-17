import { SvelteComponent } from 'svelte';

export interface AtCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtCircle extends SvelteComponent<AtCircleProps> {}
