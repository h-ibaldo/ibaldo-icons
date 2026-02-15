import { SvelteComponent } from 'svelte';

export interface Cloud3FolderProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Folder extends SvelteComponent<Cloud3FolderProps> {}
