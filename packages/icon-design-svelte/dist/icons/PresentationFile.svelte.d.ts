import { SvelteComponent } from 'svelte';

export interface PresentationFileProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PresentationFile extends SvelteComponent<PresentationFileProps> {}
