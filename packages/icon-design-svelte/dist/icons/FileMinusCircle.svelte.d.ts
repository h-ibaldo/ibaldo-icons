import { SvelteComponent } from 'svelte';

export interface FileMinusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileMinusCircle extends SvelteComponent<FileMinusCircleProps> {}
