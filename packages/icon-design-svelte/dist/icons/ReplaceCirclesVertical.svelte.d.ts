import { SvelteComponent } from 'svelte';

export interface ReplaceCirclesVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ReplaceCirclesVertical extends SvelteComponent<ReplaceCirclesVerticalProps> {}
