import { SvelteComponent } from 'svelte';

export interface FileUserDoublePlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileUserDoublePlain extends SvelteComponent<FileUserDoublePlainProps> {}
