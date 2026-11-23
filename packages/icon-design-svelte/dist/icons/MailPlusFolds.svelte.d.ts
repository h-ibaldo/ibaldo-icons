import { SvelteComponent } from 'svelte';

export interface MailPlusFoldsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailPlusFolds extends SvelteComponent<MailPlusFoldsProps> {}
