import { SvelteComponent } from 'svelte';

export interface ChatEyeBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatEyeBroken extends SvelteComponent<ChatEyeBrokenProps> {}
