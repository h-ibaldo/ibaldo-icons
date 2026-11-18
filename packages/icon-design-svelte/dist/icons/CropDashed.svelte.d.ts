import { SvelteComponent } from 'svelte';

export interface CropDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CropDashed extends SvelteComponent<CropDashedProps> {}
