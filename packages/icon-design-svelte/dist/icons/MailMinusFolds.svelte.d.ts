import { SvelteComponent } from 'svelte';

export interface MailMinusFoldsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailMinusFolds extends SvelteComponent<MailMinusFoldsProps> {}
