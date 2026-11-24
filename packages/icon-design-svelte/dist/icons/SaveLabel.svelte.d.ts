import { SvelteComponent } from 'svelte';

export interface SaveLabelProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveLabel extends SvelteComponent<SaveLabelProps> {}
