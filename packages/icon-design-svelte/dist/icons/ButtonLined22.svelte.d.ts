import { SvelteComponent } from 'svelte';

export interface ButtonLined22Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ButtonLined22 extends SvelteComponent<ButtonLined22Props> {}
