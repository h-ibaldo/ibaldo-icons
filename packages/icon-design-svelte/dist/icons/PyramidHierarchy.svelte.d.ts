import { SvelteComponent } from 'svelte';

export interface PyramidHierarchyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PyramidHierarchy extends SvelteComponent<PyramidHierarchyProps> {}
