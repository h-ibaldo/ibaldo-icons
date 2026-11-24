import { SvelteComponent } from 'svelte';

export interface FormControlsCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormControlsCheck extends SvelteComponent<FormControlsCheckProps> {}
