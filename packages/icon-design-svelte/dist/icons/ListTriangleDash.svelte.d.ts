import { SvelteComponent } from 'svelte';

export interface ListTriangleDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListTriangleDash extends SvelteComponent<ListTriangleDashProps> {}
