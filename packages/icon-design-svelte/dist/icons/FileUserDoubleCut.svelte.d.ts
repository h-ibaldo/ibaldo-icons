import { SvelteComponent } from 'svelte';

export interface FileUserDoubleCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileUserDoubleCut extends SvelteComponent<FileUserDoubleCutProps> {}
