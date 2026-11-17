import { SvelteComponent } from 'svelte';

export interface WarningSquareStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningSquareStack extends SvelteComponent<WarningSquareStackProps> {}
