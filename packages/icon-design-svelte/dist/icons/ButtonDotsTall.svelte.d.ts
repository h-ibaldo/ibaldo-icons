import { SvelteComponent } from 'svelte';

export interface ButtonDotsTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ButtonDotsTall extends SvelteComponent<ButtonDotsTallProps> {}
