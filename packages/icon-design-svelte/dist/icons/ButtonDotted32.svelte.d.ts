import { SvelteComponent } from 'svelte';

export interface ButtonDotted32Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ButtonDotted32 extends SvelteComponent<ButtonDotted32Props> {}
