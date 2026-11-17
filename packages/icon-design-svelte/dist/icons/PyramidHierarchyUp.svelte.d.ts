import { SvelteComponent } from 'svelte';

export interface PyramidHierarchyUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PyramidHierarchyUp extends SvelteComponent<PyramidHierarchyUpProps> {}
