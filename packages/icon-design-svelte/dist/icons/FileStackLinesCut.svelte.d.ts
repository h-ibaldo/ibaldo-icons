import { SvelteComponent } from 'svelte';

export interface FileStackLinesCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileStackLinesCut extends SvelteComponent<FileStackLinesCutProps> {}
