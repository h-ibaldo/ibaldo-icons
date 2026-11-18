import { SvelteComponent } from 'svelte';

export interface ChatStackAlertBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackAlertBroken extends SvelteComponent<ChatStackAlertBrokenProps> {}
