import { SvelteComponent } from 'svelte';

export interface WarningExclamationCircle2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningExclamationCircle2 extends SvelteComponent<WarningExclamationCircle2Props> {}
