import { SvelteComponent } from 'svelte';

export interface TrashBanProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashBan extends SvelteComponent<TrashBanProps> {}
