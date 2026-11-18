import { SvelteComponent } from 'svelte';

export interface FileLinkLeftSlantedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileLinkLeftSlanted extends SvelteComponent<FileLinkLeftSlantedProps> {}
