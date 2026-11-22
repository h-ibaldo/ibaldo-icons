import { SvelteComponent } from 'svelte';

export interface FileFilmProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileFilm extends SvelteComponent<FileFilmProps> {}
