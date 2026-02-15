import { SvelteComponent } from 'svelte';

export interface UpgradeUpdateGearProgressBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UpgradeUpdateGearProgressBar extends SvelteComponent<UpgradeUpdateGearProgressBarProps> {}
