import { SvelteComponent } from 'svelte';

export interface SaveDiskMenuProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveDiskMenu extends SvelteComponent<SaveDiskMenuProps> {}
