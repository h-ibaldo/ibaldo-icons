import { SvelteComponent } from 'svelte';

export interface NewspaperPhotoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NewspaperPhoto extends SvelteComponent<NewspaperPhotoProps> {}
