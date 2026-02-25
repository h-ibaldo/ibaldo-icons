import { SvelteComponent } from 'svelte';

export interface PresentationKeynoteLayoutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PresentationKeynoteLayout extends SvelteComponent<PresentationKeynoteLayoutProps> {}
