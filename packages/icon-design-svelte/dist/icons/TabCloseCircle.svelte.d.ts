import { SvelteComponent } from 'svelte';

export interface TabCloseCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabCloseCircle extends SvelteComponent<TabCloseCircleProps> {}
