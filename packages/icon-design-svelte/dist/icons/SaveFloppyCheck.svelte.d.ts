import { SvelteComponent } from 'svelte';

export interface SaveFloppyCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveFloppyCheck extends SvelteComponent<SaveFloppyCheckProps> {}
