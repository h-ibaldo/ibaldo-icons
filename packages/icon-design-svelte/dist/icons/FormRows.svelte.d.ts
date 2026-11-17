import { SvelteComponent } from 'svelte';

export interface FormRowsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormRows extends SvelteComponent<FormRowsProps> {}
