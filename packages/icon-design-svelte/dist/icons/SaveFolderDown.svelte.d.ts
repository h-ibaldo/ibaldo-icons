import { SvelteComponent } from 'svelte';

export interface SaveFolderDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveFolderDown extends SvelteComponent<SaveFolderDownProps> {}
