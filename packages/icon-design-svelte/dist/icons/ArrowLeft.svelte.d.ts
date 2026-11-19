import { SvelteComponent } from 'svelte';

export interface ArrowLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowLeft extends SvelteComponent<ArrowLeftProps> {}
