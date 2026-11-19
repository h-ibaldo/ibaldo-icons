import { SvelteComponent } from 'svelte';

export interface FileLinesDashedCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileLinesDashedCut extends SvelteComponent<FileLinesDashedCutProps> {}
