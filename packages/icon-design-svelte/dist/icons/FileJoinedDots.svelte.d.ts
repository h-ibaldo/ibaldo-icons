import { SvelteComponent } from 'svelte';

export interface FileJoinedDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileJoinedDots extends SvelteComponent<FileJoinedDotsProps> {}
