import { SvelteComponent } from 'svelte';

export interface FileUnlockCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileUnlockCut extends SvelteComponent<FileUnlockCutProps> {}
