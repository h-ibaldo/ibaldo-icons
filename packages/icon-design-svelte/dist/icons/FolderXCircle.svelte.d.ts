import { SvelteComponent } from 'svelte';

export interface FolderXCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderXCircle extends SvelteComponent<FolderXCircleProps> {}
