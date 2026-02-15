import { SvelteComponent } from 'svelte';

export interface ButtonBubble2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ButtonBubble2 extends SvelteComponent<ButtonBubble2Props> {}
