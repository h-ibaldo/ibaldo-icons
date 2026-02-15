import { SvelteComponent } from 'svelte';

export interface ButtonLined2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ButtonLined2 extends SvelteComponent<ButtonLined2Props> {}
