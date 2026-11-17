import { SvelteComponent } from 'svelte';

export interface WarningOffWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningOffWide extends SvelteComponent<WarningOffWideProps> {}
