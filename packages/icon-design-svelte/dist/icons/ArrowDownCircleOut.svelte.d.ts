import { SvelteComponent } from 'svelte';

export interface ArrowDownCircleOutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownCircleOut extends SvelteComponent<ArrowDownCircleOutProps> {}
