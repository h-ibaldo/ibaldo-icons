import { SvelteComponent } from 'svelte';

export interface ButtonScribbleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ButtonScribble extends SvelteComponent<ButtonScribbleProps> {}
