import { SvelteComponent } from 'svelte';

export interface AdjustVerticalBlockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AdjustVerticalBlock extends SvelteComponent<AdjustVerticalBlockProps> {}
