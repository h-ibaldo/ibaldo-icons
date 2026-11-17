import { SvelteComponent } from 'svelte';

export interface ChatAlertRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatAlertRound extends SvelteComponent<ChatAlertRoundProps> {}
