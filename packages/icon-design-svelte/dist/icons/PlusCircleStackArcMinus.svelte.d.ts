import { SvelteComponent } from 'svelte';

export interface PlusCircleStackArcMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PlusCircleStackArcMinus extends SvelteComponent<PlusCircleStackArcMinusProps> {}
