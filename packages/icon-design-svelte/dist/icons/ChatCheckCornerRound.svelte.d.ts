import { SvelteComponent } from 'svelte';

export interface ChatCheckCornerRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckCornerRound extends SvelteComponent<ChatCheckCornerRoundProps> {}
