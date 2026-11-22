import { SvelteComponent } from 'svelte';

export interface FolderArrowLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderArrowLeft extends SvelteComponent<FolderArrowLeftProps> {}
