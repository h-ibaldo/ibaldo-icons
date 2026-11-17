import { SvelteComponent } from 'svelte';

export interface ArrowLeftCircleOutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowLeftCircleOut extends SvelteComponent<ArrowLeftCircleOutProps> {}
