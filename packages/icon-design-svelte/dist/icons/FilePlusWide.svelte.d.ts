import { SvelteComponent } from 'svelte';

export interface FilePlusWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FilePlusWide extends SvelteComponent<FilePlusWideProps> {}
