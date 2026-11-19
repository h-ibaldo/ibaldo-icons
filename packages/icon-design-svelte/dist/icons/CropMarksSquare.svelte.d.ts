import { SvelteComponent } from 'svelte';

export interface CropMarksSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CropMarksSquare extends SvelteComponent<CropMarksSquareProps> {}
