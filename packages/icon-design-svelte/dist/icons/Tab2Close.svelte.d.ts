import { SvelteComponent } from 'svelte';

export interface Tab2CloseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab2Close extends SvelteComponent<Tab2CloseProps> {}
