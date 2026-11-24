import { SvelteComponent } from 'svelte';

export interface ArrowLeftRightCircleHarpoonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowLeftRightCircleHarpoon extends SvelteComponent<ArrowLeftRightCircleHarpoonProps> {}
