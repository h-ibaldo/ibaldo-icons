import { SvelteComponent } from 'svelte';

export interface ButtonBubble1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ButtonBubble1 extends SvelteComponent<ButtonBubble1Props> {}
