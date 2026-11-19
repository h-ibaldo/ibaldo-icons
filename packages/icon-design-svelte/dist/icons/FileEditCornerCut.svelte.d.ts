import { SvelteComponent } from 'svelte';

export interface FileEditCornerCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileEditCornerCut extends SvelteComponent<FileEditCornerCutProps> {}
