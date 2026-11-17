import { SvelteComponent } from 'svelte';

export interface Tab4CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab4Check extends SvelteComponent<Tab4CheckProps> {}
