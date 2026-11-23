import { SvelteComponent } from 'svelte';

export interface TextGProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextG extends SvelteComponent<TextGProps> {}
