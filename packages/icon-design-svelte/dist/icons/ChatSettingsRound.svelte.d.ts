import { SvelteComponent } from 'svelte';

export interface ChatSettingsRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatSettingsRound extends SvelteComponent<ChatSettingsRoundProps> {}
