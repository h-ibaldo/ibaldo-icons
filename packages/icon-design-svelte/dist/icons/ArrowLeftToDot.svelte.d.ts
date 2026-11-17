import { SvelteComponent } from 'svelte';

export interface ArrowLeftToDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowLeftToDot extends SvelteComponent<ArrowLeftToDotProps> {}
