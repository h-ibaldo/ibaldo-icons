import { SvelteComponent } from 'svelte';

export interface FileArrowUturnRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArrowUturnRight extends SvelteComponent<FileArrowUturnRightProps> {}
