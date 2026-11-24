import { SvelteComponent } from 'svelte';

export interface ChatXCircleBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXCircleBroken extends SvelteComponent<ChatXCircleBrokenProps> {}
