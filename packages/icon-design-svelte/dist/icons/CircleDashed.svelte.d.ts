import { SvelteComponent } from 'svelte';

export interface CircleDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CircleDashed extends SvelteComponent<CircleDashedProps> {}
