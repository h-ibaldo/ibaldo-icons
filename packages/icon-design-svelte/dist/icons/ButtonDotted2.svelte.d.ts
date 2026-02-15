import { SvelteComponent } from 'svelte';

export interface ButtonDotted2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ButtonDotted2 extends SvelteComponent<ButtonDotted2Props> {}
