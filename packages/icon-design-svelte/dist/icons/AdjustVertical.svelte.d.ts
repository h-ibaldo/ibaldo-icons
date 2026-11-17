import { SvelteComponent } from 'svelte';

export interface AdjustVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AdjustVertical extends SvelteComponent<AdjustVerticalProps> {}
