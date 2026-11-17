import { SvelteComponent } from 'svelte';

export interface FolderPlusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderPlusCircle extends SvelteComponent<FolderPlusCircleProps> {}
