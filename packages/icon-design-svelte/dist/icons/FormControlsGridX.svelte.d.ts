import { SvelteComponent } from 'svelte';

export interface FormControlsGridXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormControlsGridX extends SvelteComponent<FormControlsGridXProps> {}
