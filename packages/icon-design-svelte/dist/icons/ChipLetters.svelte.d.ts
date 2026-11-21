import { SvelteComponent } from 'svelte';

export interface ChipLettersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChipLetters extends SvelteComponent<ChipLettersProps> {}
