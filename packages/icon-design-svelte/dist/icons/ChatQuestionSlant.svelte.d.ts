import { SvelteComponent } from 'svelte';

export interface ChatQuestionSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatQuestionSlant extends SvelteComponent<ChatQuestionSlantProps> {}
