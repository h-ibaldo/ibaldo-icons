import { SvelteComponent } from 'svelte';

export interface ChatPlusBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatPlusBroken extends SvelteComponent<ChatPlusBrokenProps> {}
