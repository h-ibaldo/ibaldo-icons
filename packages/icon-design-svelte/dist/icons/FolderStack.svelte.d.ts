import { SvelteComponent } from 'svelte';

export interface FolderStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderStack extends SvelteComponent<FolderStackProps> {}
