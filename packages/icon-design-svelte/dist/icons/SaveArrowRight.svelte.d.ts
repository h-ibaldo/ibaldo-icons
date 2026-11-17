import { SvelteComponent } from 'svelte';

export interface SaveArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveArrowRight extends SvelteComponent<SaveArrowRightProps> {}
