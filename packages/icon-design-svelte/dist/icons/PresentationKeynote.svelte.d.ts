import { SvelteComponent } from 'svelte';

export interface PresentationKeynoteProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PresentationKeynote extends SvelteComponent<PresentationKeynoteProps> {}
