import { SvelteComponent } from 'svelte';

export interface PresentationKeynoteFileProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PresentationKeynoteFile extends SvelteComponent<PresentationKeynoteFileProps> {}
