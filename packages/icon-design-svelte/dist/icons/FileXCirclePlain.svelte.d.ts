import { SvelteComponent } from 'svelte';

export interface FileXCirclePlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileXCirclePlain extends SvelteComponent<FileXCirclePlainProps> {}
