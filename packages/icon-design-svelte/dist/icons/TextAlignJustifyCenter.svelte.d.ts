import { SvelteComponent } from 'svelte';

export interface TextAlignJustifyCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextAlignJustifyCenter extends SvelteComponent<TextAlignJustifyCenterProps> {}
