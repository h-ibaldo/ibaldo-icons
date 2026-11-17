import { SvelteComponent } from 'svelte';

export interface ListCheckboxProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListCheckbox extends SvelteComponent<ListCheckboxProps> {}
