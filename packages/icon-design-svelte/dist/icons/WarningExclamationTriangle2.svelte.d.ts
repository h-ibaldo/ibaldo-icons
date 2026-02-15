import { SvelteComponent } from 'svelte';

export interface WarningExclamationTriangle2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningExclamationTriangle2 extends SvelteComponent<WarningExclamationTriangle2Props> {}
