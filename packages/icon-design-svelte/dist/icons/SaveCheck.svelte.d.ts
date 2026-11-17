import { SvelteComponent } from 'svelte';

export interface SaveCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveCheck extends SvelteComponent<SaveCheckProps> {}
