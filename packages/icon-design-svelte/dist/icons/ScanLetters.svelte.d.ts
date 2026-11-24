import { SvelteComponent } from 'svelte';

export interface ScanLettersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanLetters extends SvelteComponent<ScanLettersProps> {}
