import { SvelteComponent } from 'svelte';

export interface PaperclipCircleArrowLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipCircleArrowLeft extends SvelteComponent<PaperclipCircleArrowLeftProps> {}
