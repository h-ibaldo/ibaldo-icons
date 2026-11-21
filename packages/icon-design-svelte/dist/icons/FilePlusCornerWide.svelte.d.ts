import { SvelteComponent } from 'svelte';

export interface FilePlusCornerWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FilePlusCornerWide extends SvelteComponent<FilePlusCornerWideProps> {}
