import { SvelteComponent } from 'svelte';

export interface ChatQuestionBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatQuestionBroken extends SvelteComponent<ChatQuestionBrokenProps> {}
