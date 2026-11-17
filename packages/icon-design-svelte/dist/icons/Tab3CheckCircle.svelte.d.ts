import { SvelteComponent } from 'svelte';

export interface Tab3CheckCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab3CheckCircle extends SvelteComponent<Tab3CheckCircleProps> {}
