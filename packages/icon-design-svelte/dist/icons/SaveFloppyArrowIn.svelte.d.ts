import { SvelteComponent } from 'svelte';

export interface SaveFloppyArrowInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveFloppyArrowIn extends SvelteComponent<SaveFloppyArrowInProps> {}
