import { SvelteComponent } from 'svelte';

export interface CropProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Crop extends SvelteComponent<CropProps> {}
