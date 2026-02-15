import { SvelteComponent } from 'svelte';

export interface ButtonDotted12Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ButtonDotted12 extends SvelteComponent<ButtonDotted12Props> {}
