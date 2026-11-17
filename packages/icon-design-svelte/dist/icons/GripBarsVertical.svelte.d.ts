import { SvelteComponent } from 'svelte';

export interface GripBarsVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GripBarsVertical extends SvelteComponent<GripBarsVerticalProps> {}
