import { SvelteComponent } from 'svelte';

export interface Tab4CloseCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab4CloseCircle extends SvelteComponent<Tab4CloseCircleProps> {}
