import { SvelteComponent } from 'svelte';

export interface AdjustPairVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AdjustPairVertical extends SvelteComponent<AdjustPairVerticalProps> {}
