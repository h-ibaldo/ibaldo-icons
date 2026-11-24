import { SvelteComponent } from 'svelte';

export interface ChatAlertBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatAlertBroken extends SvelteComponent<ChatAlertBrokenProps> {}
