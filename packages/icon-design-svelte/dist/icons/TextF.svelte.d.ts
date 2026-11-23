import { SvelteComponent } from 'svelte';

export interface TextFProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextF extends SvelteComponent<TextFProps> {}
