import { SvelteComponent } from 'svelte';

export interface MailCheckFoldsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailCheckFolds extends SvelteComponent<MailCheckFoldsProps> {}
