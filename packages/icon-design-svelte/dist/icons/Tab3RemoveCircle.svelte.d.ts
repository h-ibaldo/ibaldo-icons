import { SvelteComponent } from 'svelte';

export interface Tab3RemoveCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab3RemoveCircle extends SvelteComponent<Tab3RemoveCircleProps> {}
