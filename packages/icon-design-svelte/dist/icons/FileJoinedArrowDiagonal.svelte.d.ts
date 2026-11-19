import { SvelteComponent } from 'svelte';

export interface FileJoinedArrowDiagonalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileJoinedArrowDiagonal extends SvelteComponent<FileJoinedArrowDiagonalProps> {}
