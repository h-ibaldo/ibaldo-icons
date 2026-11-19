import { SvelteComponent } from 'svelte';

export interface PointerXCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerXCircle extends SvelteComponent<PointerXCircleProps> {}
