import { SvelteComponent } from 'svelte';

export interface WarningExclamationTriangleDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningExclamationTriangleDashed extends SvelteComponent<WarningExclamationTriangleDashedProps> {}
