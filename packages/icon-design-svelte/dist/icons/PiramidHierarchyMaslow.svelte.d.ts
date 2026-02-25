import { SvelteComponent } from 'svelte';

export interface PiramidHierarchyMaslowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PiramidHierarchyMaslow extends SvelteComponent<PiramidHierarchyMaslowProps> {}
