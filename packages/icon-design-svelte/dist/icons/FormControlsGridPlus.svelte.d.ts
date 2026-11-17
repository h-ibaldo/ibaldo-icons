import { SvelteComponent } from 'svelte';

export interface FormControlsGridPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormControlsGridPlus extends SvelteComponent<FormControlsGridPlusProps> {}
