import { SvelteComponent } from 'svelte';

export interface ButtonBubble32Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ButtonBubble32 extends SvelteComponent<ButtonBubble32Props> {}
