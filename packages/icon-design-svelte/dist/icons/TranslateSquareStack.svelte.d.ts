import { SvelteComponent } from 'svelte';

export interface TranslateSquareStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TranslateSquareStack extends SvelteComponent<TranslateSquareStackProps> {}
