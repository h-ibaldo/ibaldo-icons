import { SvelteComponent } from 'svelte';

export interface ArrowDownCircleInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownCircleIn extends SvelteComponent<ArrowDownCircleInProps> {}
