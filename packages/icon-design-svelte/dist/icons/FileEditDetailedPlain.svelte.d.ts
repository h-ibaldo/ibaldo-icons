import { SvelteComponent } from 'svelte';

export interface FileEditDetailedPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileEditDetailedPlain extends SvelteComponent<FileEditDetailedPlainProps> {}
