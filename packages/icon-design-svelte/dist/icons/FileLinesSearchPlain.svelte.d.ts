import { SvelteComponent } from 'svelte';

export interface FileLinesSearchPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileLinesSearchPlain extends SvelteComponent<FileLinesSearchPlainProps> {}
