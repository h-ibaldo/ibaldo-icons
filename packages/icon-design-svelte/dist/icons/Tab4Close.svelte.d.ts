import { SvelteComponent } from 'svelte';

export interface Tab4CloseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab4Close extends SvelteComponent<Tab4CloseProps> {}
