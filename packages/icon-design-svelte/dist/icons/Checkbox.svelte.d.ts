import { SvelteComponent } from 'svelte';

export interface CheckboxProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Checkbox extends SvelteComponent<CheckboxProps> {}
