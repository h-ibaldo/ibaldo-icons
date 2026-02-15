import { SvelteComponent } from 'svelte';

export interface ButtonBubble12Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ButtonBubble12 extends SvelteComponent<ButtonBubble12Props> {}
