import { SvelteComponent } from 'svelte';

export interface WarningExclamationTriangleHighRiskProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningExclamationTriangleHighRisk extends SvelteComponent<WarningExclamationTriangleHighRiskProps> {}
