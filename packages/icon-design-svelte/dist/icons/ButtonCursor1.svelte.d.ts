import { SvelteComponent } from 'svelte';

export interface ButtonCursor1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ButtonCursor1 extends SvelteComponent<ButtonCursor1Props> {}
