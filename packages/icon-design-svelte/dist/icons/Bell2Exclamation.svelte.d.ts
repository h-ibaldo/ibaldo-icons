import { SvelteComponent } from 'svelte';

export interface Bell2ExclamationProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell2Exclamation extends SvelteComponent<Bell2ExclamationProps> {}
