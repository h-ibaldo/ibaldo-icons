import { SvelteComponent } from 'svelte';

export interface TrashRefreshProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashRefresh extends SvelteComponent<TrashRefreshProps> {}
