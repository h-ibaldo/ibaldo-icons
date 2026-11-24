import { SvelteComponent } from 'svelte';

export interface FolderUserProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderUser extends SvelteComponent<FolderUserProps> {}
