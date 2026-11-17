import { SvelteComponent } from 'svelte';

export interface Tab3ArrowLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab3ArrowLeft extends SvelteComponent<Tab3ArrowLeftProps> {}
