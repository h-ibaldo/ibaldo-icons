import { SvelteComponent } from 'svelte';

export interface ArrowRightToDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowRightToDot extends SvelteComponent<ArrowRightToDotProps> {}
