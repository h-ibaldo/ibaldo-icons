import { SvelteComponent } from 'svelte';

export interface SaveMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveMinus extends SvelteComponent<SaveMinusProps> {}
