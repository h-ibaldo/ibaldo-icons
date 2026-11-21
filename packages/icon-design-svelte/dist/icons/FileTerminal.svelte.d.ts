import { SvelteComponent } from 'svelte';

export interface FileTerminalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileTerminal extends SvelteComponent<FileTerminalProps> {}
