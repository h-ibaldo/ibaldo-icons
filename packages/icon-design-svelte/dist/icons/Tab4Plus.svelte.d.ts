import { SvelteComponent } from 'svelte';

export interface Tab4PlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab4Plus extends SvelteComponent<Tab4PlusProps> {}
