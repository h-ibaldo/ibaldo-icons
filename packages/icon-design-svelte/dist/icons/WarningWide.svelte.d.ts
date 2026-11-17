import { SvelteComponent } from 'svelte';

export interface WarningWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningWide extends SvelteComponent<WarningWideProps> {}
