import { SvelteComponent } from 'svelte';

export interface PaperclipCircleCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipCircleCheck extends SvelteComponent<PaperclipCircleCheckProps> {}
