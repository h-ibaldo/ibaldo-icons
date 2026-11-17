import { SvelteComponent } from 'svelte';

export interface ChatQuestionRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatQuestionRound extends SvelteComponent<ChatQuestionRoundProps> {}
