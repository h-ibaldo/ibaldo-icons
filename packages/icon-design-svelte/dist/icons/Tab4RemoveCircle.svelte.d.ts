import { SvelteComponent } from 'svelte';

export interface Tab4RemoveCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab4RemoveCircle extends SvelteComponent<Tab4RemoveCircleProps> {}
