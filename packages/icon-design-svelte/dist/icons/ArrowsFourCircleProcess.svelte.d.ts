import { SvelteComponent } from 'svelte';

export interface ArrowsFourCircleProcessProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowsFourCircleProcess extends SvelteComponent<ArrowsFourCircleProcessProps> {}
