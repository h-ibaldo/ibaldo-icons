import { SvelteComponent } from 'svelte';

export interface FolderMinusCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderMinusCenter extends SvelteComponent<FolderMinusCenterProps> {}
