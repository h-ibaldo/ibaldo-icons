import { SvelteComponent } from 'svelte';

export interface BinocularsStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BinocularsStraight extends SvelteComponent<BinocularsStraightProps> {}
