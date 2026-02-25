import { SvelteComponent } from 'svelte';

export interface WarningExclamationTriangle3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningExclamationTriangle3 extends SvelteComponent<WarningExclamationTriangle3Props> {}
