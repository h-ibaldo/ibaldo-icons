import { SvelteComponent } from 'svelte';

export interface MailEditFoldsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailEditFolds extends SvelteComponent<MailEditFoldsProps> {}
