import { SvelteComponent } from 'svelte';

export interface MailStackSearchFoldsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailStackSearchFolds extends SvelteComponent<MailStackSearchFoldsProps> {}
