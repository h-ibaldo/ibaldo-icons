import { SvelteComponent } from 'svelte';

export interface SaveBanProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveBan extends SvelteComponent<SaveBanProps> {}
