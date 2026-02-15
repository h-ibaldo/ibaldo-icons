import { SvelteComponent } from 'svelte';

export interface PiramidHierarchyMaslowArrowUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PiramidHierarchyMaslowArrowUp extends SvelteComponent<PiramidHierarchyMaslowArrowUpProps> {}
