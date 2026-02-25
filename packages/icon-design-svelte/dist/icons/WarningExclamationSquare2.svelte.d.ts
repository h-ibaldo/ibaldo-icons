import { SvelteComponent } from 'svelte';

export interface WarningExclamationSquare2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningExclamationSquare2 extends SvelteComponent<WarningExclamationSquare2Props> {}
