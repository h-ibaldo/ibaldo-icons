import { SvelteComponent } from 'svelte';

export interface MailProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Mail extends SvelteComponent<MailProps> {}
