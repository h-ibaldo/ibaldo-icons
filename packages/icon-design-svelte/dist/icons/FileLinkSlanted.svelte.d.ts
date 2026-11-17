import { SvelteComponent } from 'svelte';

export interface FileLinkSlantedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileLinkSlanted extends SvelteComponent<FileLinkSlantedProps> {}
