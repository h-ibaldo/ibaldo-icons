import { SvelteComponent } from 'svelte';

export interface WarningForbidden1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningForbidden1 extends SvelteComponent<WarningForbidden1Props> {}
