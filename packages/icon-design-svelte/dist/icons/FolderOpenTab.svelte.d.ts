import { SvelteComponent } from 'svelte';

export interface FolderOpenTabProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderOpenTab extends SvelteComponent<FolderOpenTabProps> {}
