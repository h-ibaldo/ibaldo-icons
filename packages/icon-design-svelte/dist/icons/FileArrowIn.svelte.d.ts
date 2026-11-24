import { SvelteComponent } from 'svelte';

export interface FileArrowInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArrowIn extends SvelteComponent<FileArrowInProps> {}
