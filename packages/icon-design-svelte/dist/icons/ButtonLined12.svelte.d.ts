import { SvelteComponent } from 'svelte';

export interface ButtonLined12Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ButtonLined12 extends SvelteComponent<ButtonLined12Props> {}
