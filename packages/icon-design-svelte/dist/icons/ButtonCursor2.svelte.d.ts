import { SvelteComponent } from 'svelte';

export interface ButtonCursor2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ButtonCursor2 extends SvelteComponent<ButtonCursor2Props> {}
