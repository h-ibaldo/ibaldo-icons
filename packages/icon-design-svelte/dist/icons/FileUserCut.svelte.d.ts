import { SvelteComponent } from 'svelte';

export interface FileUserCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileUserCut extends SvelteComponent<FileUserCutProps> {}
