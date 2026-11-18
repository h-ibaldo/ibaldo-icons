import { SvelteComponent } from 'svelte';

export interface PointerPlusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerPlusCircle extends SvelteComponent<PointerPlusCircleProps> {}
