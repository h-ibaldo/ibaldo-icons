import { SvelteComponent } from 'svelte';

export interface DockBottomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DockBottom extends SvelteComponent<DockBottomProps> {}
