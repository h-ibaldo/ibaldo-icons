import { SvelteComponent } from 'svelte';

export interface ChatQuestionWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatQuestionWide extends SvelteComponent<ChatQuestionWideProps> {}
