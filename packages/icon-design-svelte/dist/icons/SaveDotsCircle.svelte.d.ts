import { SvelteComponent } from 'svelte';

export interface SaveDotsCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveDotsCircle extends SvelteComponent<SaveDotsCircleProps> {}
