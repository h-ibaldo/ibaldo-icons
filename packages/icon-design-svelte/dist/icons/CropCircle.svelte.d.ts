import { SvelteComponent } from 'svelte';

export interface CropCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CropCircle extends SvelteComponent<CropCircleProps> {}
