import { SvelteComponent } from 'svelte';

export interface CheckBoldProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckBold extends SvelteComponent<CheckBoldProps> {}
