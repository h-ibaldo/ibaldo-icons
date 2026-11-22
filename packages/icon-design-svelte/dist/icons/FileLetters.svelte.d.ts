import { SvelteComponent } from 'svelte';

export interface FileLettersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileLetters extends SvelteComponent<FileLettersProps> {}
