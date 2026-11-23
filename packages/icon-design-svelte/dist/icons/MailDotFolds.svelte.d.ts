import { SvelteComponent } from 'svelte';

export interface MailDotFoldsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailDotFolds extends SvelteComponent<MailDotFoldsProps> {}
