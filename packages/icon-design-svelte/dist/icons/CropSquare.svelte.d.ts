import { SvelteComponent } from 'svelte';

export interface CropSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CropSquare extends SvelteComponent<CropSquareProps> {}
