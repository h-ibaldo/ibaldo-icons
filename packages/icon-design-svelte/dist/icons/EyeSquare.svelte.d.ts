import { SvelteComponent } from 'svelte';

export interface EyeSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EyeSquare extends SvelteComponent<EyeSquareProps> {}
