import { SvelteComponent } from 'svelte';

export interface Tab3CloseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab3Close extends SvelteComponent<Tab3CloseProps> {}
