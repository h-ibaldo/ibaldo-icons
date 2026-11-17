import { SvelteComponent } from 'svelte';

export interface FormControlsXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormControlsX extends SvelteComponent<FormControlsXProps> {}
