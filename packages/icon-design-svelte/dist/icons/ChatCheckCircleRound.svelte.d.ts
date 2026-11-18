import { SvelteComponent } from 'svelte';

export interface ChatCheckCircleRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckCircleRound extends SvelteComponent<ChatCheckCircleRoundProps> {}
