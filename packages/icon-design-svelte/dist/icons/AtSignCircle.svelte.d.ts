import { SvelteComponent } from 'svelte';

export interface AtSignCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSignCircle extends SvelteComponent<AtSignCircleProps> {}
