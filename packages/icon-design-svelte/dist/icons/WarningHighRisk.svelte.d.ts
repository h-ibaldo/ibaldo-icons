import { SvelteComponent } from 'svelte';

export interface WarningHighRiskProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningHighRisk extends SvelteComponent<WarningHighRiskProps> {}
