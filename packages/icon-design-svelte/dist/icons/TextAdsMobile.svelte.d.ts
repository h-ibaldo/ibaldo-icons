import { SvelteComponent } from 'svelte';

export interface TextAdsMobileProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextAdsMobile extends SvelteComponent<TextAdsMobileProps> {}
