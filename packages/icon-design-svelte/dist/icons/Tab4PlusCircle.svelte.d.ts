import { SvelteComponent } from 'svelte';

export interface Tab4PlusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab4PlusCircle extends SvelteComponent<Tab4PlusCircleProps> {}
