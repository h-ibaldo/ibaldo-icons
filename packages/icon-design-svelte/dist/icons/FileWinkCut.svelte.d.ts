import { SvelteComponent } from 'svelte';

export interface FileWinkCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileWinkCut extends SvelteComponent<FileWinkCutProps> {}
