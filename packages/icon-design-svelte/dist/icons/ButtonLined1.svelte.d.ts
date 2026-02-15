import { SvelteComponent } from 'svelte';

export interface ButtonLined1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ButtonLined1 extends SvelteComponent<ButtonLined1Props> {}
