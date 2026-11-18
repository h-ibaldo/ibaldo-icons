import { SvelteComponent } from 'svelte';

export interface FormControlsPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormControlsPlus extends SvelteComponent<FormControlsPlusProps> {}
