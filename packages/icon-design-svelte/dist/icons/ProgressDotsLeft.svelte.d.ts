import { SvelteComponent } from 'svelte';

export interface ProgressDotsLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ProgressDotsLeft extends SvelteComponent<ProgressDotsLeftProps> {}
