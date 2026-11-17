import { SvelteComponent } from 'svelte';

export interface FormProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Form extends SvelteComponent<FormProps> {}
