import { SvelteComponent } from 'svelte';

export interface ButtonPillScribbleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ButtonPillScribble extends SvelteComponent<ButtonPillScribbleProps> {}
