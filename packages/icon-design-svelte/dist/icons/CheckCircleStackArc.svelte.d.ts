import { SvelteComponent } from 'svelte';

export interface CheckCircleStackArcProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckCircleStackArc extends SvelteComponent<CheckCircleStackArcProps> {}
