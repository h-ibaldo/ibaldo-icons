import { SvelteComponent } from 'svelte';

export interface FileLockCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileLockCut extends SvelteComponent<FileLockCutProps> {}
