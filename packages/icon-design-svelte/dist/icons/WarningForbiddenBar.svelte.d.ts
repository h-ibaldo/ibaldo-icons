import { SvelteComponent } from 'svelte';

export interface WarningForbiddenBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningForbiddenBar extends SvelteComponent<WarningForbiddenBarProps> {}
