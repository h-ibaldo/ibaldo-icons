import { SvelteComponent } from 'svelte';

export interface ChatQuestionProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatQuestion extends SvelteComponent<ChatQuestionProps> {}
