import { SvelteComponent } from 'svelte';

export interface HierarchyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Hierarchy extends SvelteComponent<HierarchyProps> {}
