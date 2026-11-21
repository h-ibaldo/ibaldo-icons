import { SvelteComponent } from 'svelte';

export interface FileTerminalCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileTerminalCut extends SvelteComponent<FileTerminalCutProps> {}
