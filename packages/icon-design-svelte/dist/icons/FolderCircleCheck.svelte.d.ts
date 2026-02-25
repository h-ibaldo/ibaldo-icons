import { SvelteComponent } from 'svelte';

export interface FolderCircleCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderCircleCheck extends SvelteComponent<FolderCircleCheckProps> {}
