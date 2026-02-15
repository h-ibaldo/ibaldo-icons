import { SvelteComponent } from 'svelte';

export interface ButtonDotted3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ButtonDotted3 extends SvelteComponent<ButtonDotted3Props> {}
