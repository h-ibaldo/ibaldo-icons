import { SvelteComponent } from 'svelte';

export interface ArrowLeftDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowLeftDouble extends SvelteComponent<ArrowLeftDoubleProps> {}
