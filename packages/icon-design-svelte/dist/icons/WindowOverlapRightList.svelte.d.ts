import { SvelteComponent } from 'svelte';

export interface WindowOverlapRightListProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowOverlapRightList extends SvelteComponent<WindowOverlapRightListProps> {}
