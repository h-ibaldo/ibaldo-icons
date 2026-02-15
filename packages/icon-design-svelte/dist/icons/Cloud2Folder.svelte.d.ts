import { SvelteComponent } from 'svelte';

export interface Cloud2FolderProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2Folder extends SvelteComponent<Cloud2FolderProps> {}
