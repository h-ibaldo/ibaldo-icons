import { SvelteComponent } from 'svelte';

export interface SquareColumnsThreeDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareColumnsThreeDashed extends SvelteComponent<SquareColumnsThreeDashedProps> {}
