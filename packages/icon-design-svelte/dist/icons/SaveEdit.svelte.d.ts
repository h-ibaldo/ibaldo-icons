import { SvelteComponent } from 'svelte';

export interface SaveEditProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveEdit extends SvelteComponent<SaveEditProps> {}
