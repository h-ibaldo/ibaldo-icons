import { SvelteComponent } from 'svelte';

export interface SaveSearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveSearch extends SvelteComponent<SaveSearchProps> {}
