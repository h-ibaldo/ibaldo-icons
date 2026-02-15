import { SvelteComponent } from 'svelte';

export interface Form2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Form2 extends SvelteComponent<Form2Props> {}
