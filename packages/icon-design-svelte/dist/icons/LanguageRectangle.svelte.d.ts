import { SvelteComponent } from 'svelte';

export interface LanguageRectangleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LanguageRectangle extends SvelteComponent<LanguageRectangleProps> {}
