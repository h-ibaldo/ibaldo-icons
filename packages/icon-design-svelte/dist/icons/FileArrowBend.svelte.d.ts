import { SvelteComponent } from 'svelte';

export interface FileArrowBendProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArrowBend extends SvelteComponent<FileArrowBendProps> {}
