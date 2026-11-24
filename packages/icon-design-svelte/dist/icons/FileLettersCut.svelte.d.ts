import { SvelteComponent } from 'svelte';

export interface FileLettersCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileLettersCut extends SvelteComponent<FileLettersCutProps> {}
