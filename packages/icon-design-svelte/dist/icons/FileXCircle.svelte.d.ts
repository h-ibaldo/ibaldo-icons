import { SvelteComponent } from 'svelte';

export interface FileXCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileXCircle extends SvelteComponent<FileXCircleProps> {}
