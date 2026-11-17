import { SvelteComponent } from 'svelte';

export interface FolderCheckCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderCheckCircle extends SvelteComponent<FolderCheckCircleProps> {}
