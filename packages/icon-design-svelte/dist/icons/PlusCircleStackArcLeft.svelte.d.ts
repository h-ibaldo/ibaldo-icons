import { SvelteComponent } from 'svelte';

export interface PlusCircleStackArcLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PlusCircleStackArcLeft extends SvelteComponent<PlusCircleStackArcLeftProps> {}
