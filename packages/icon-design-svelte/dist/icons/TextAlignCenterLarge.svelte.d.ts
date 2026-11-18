import { SvelteComponent } from 'svelte';

export interface TextAlignCenterLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextAlignCenterLarge extends SvelteComponent<TextAlignCenterLargeProps> {}
