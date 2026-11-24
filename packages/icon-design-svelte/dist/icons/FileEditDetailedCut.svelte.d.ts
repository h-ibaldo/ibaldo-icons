import { SvelteComponent } from 'svelte';

export interface FileEditDetailedCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileEditDetailedCut extends SvelteComponent<FileEditDetailedCutProps> {}
