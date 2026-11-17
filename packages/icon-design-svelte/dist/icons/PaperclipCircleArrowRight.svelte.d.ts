import { SvelteComponent } from 'svelte';

export interface PaperclipCircleArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipCircleArrowRight extends SvelteComponent<PaperclipCircleArrowRightProps> {}
