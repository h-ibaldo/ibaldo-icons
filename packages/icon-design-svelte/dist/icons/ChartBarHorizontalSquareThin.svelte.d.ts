import { SvelteComponent } from 'svelte';

export interface ChartBarHorizontalSquareThinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarHorizontalSquareThin extends SvelteComponent<ChartBarHorizontalSquareThinProps> {}
