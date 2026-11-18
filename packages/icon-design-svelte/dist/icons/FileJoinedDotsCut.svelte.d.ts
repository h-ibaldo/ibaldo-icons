import { SvelteComponent } from 'svelte';

export interface FileJoinedDotsCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileJoinedDotsCut extends SvelteComponent<FileJoinedDotsCutProps> {}
