import { SvelteComponent } from 'svelte';

export interface AdjustPairBlockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AdjustPairBlock extends SvelteComponent<AdjustPairBlockProps> {}
