import { SvelteComponent } from 'svelte';

export interface XCircleStackArcProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class XCircleStackArc extends SvelteComponent<XCircleStackArcProps> {}
