import { SvelteComponent } from 'svelte';

export interface ChatCheckCircleBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckCircleBroken extends SvelteComponent<ChatCheckCircleBrokenProps> {}
