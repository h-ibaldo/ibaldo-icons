import { SvelteComponent } from 'svelte';

export interface Tab3AddCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab3AddCircle extends SvelteComponent<Tab3AddCircleProps> {}
