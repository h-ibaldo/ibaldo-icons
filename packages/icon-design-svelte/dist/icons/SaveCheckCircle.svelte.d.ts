import { SvelteComponent } from 'svelte';

export interface SaveCheckCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveCheckCircle extends SvelteComponent<SaveCheckCircleProps> {}
