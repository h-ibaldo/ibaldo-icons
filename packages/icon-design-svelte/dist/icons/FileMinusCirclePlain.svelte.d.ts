import { SvelteComponent } from 'svelte';

export interface FileMinusCirclePlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileMinusCirclePlain extends SvelteComponent<FileMinusCirclePlainProps> {}
