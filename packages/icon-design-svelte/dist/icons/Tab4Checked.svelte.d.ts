import { SvelteComponent } from 'svelte';

export interface Tab4CheckedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab4Checked extends SvelteComponent<Tab4CheckedProps> {}
