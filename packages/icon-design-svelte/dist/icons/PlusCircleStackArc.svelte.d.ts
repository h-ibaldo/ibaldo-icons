import { SvelteComponent } from 'svelte';

export interface PlusCircleStackArcProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PlusCircleStackArc extends SvelteComponent<PlusCircleStackArcProps> {}
