import { SvelteComponent } from 'svelte';

export interface ButtonDotted1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ButtonDotted1 extends SvelteComponent<ButtonDotted1Props> {}
