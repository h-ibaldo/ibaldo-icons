import { SvelteComponent } from 'svelte';

export interface SquareArrowLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareArrowLeft extends SvelteComponent<SquareArrowLeftProps> {}
