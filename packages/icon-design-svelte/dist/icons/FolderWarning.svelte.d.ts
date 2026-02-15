import { SvelteComponent } from 'svelte';

export interface FolderWarningProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderWarning extends SvelteComponent<FolderWarningProps> {}
