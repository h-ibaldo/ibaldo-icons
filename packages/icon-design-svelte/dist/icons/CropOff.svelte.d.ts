import { SvelteComponent } from 'svelte';

export interface CropOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CropOff extends SvelteComponent<CropOffProps> {}
