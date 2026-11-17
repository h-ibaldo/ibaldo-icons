import { SvelteComponent } from 'svelte';

export interface PresentationBoardProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PresentationBoard extends SvelteComponent<PresentationBoardProps> {}
