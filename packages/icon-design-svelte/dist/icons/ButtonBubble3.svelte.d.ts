import { SvelteComponent } from 'svelte';

export interface ButtonBubble3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ButtonBubble3 extends SvelteComponent<ButtonBubble3Props> {}
