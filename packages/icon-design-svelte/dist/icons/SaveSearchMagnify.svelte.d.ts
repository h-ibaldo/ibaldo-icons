import { SvelteComponent } from 'svelte';

export interface SaveSearchMagnifyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveSearchMagnify extends SvelteComponent<SaveSearchMagnifyProps> {}
