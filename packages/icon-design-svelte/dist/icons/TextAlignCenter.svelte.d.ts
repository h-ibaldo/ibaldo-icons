import { SvelteComponent } from 'svelte';

export interface TextAlignCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextAlignCenter extends SvelteComponent<TextAlignCenterProps> {}
