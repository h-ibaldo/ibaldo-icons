import { SvelteComponent } from 'svelte';

export interface TrashRefreshDetachedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashRefreshDetached extends SvelteComponent<TrashRefreshDetachedProps> {}
