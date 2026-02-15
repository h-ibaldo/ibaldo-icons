import { SvelteComponent } from 'svelte';

export interface Form1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Form1 extends SvelteComponent<Form1Props> {}
