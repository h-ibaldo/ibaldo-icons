import { SvelteComponent } from 'svelte';

export interface PlusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PlusCircle extends SvelteComponent<PlusCircleProps> {}
