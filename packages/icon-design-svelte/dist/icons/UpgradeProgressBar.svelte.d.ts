import { SvelteComponent } from 'svelte';

export interface UpgradeProgressBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UpgradeProgressBar extends SvelteComponent<UpgradeProgressBarProps> {}
