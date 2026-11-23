import { SvelteComponent } from 'svelte';

export interface MailXFoldsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailXFolds extends SvelteComponent<MailXFoldsProps> {}
