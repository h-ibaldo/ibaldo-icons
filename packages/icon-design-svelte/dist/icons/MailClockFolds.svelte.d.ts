import { SvelteComponent } from 'svelte';

export interface MailClockFoldsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailClockFolds extends SvelteComponent<MailClockFoldsProps> {}
