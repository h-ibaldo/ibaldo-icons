import { SvelteComponent } from 'svelte';

export interface SaveSquareDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveSquareDown extends SvelteComponent<SaveSquareDownProps> {}
