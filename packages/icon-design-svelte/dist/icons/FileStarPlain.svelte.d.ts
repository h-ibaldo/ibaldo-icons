import { SvelteComponent } from 'svelte';

export interface FileStarPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileStarPlain extends SvelteComponent<FileStarPlainProps> {}
