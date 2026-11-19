import { SvelteComponent } from 'svelte';

export interface FileEditLeftCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileEditLeftCut extends SvelteComponent<FileEditLeftCutProps> {}
