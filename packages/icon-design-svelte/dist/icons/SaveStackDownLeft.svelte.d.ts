import { SvelteComponent } from 'svelte';

export interface SaveStackDownLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveStackDownLeft extends SvelteComponent<SaveStackDownLeftProps> {}
