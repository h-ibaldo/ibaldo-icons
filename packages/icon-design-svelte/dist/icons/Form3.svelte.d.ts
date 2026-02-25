import { SvelteComponent } from 'svelte';

export interface Form3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Form3 extends SvelteComponent<Form3Props> {}
