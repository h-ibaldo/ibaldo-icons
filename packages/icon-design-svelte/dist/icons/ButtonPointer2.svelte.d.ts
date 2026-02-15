import { SvelteComponent } from 'svelte';

export interface ButtonPointer2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ButtonPointer2 extends SvelteComponent<ButtonPointer2Props> {}
