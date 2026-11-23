import { SvelteComponent } from 'svelte';

export interface TextWholeWordProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextWholeWord extends SvelteComponent<TextWholeWordProps> {}
