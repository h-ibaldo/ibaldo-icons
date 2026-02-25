import { SvelteComponent } from 'svelte';

export interface Cloud1BarSlashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1BarSlash extends SvelteComponent<Cloud1BarSlashProps> {}
