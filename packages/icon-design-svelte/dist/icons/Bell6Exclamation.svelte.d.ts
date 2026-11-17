import { SvelteComponent } from 'svelte';

export interface Bell6ExclamationProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell6Exclamation extends SvelteComponent<Bell6ExclamationProps> {}
