import { SvelteComponent } from 'svelte';

export interface FileMailProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileMail extends SvelteComponent<FileMailProps> {}
