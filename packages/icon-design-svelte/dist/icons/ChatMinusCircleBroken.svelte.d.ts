import { SvelteComponent } from 'svelte';

export interface ChatMinusCircleBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatMinusCircleBroken extends SvelteComponent<ChatMinusCircleBrokenProps> {}
