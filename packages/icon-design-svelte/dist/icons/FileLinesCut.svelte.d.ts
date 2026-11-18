import { SvelteComponent } from 'svelte';

export interface FileLinesCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileLinesCut extends SvelteComponent<FileLinesCutProps> {}
