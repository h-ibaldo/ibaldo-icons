import { SvelteComponent } from 'svelte';

export interface ChatEditBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatEditBroken extends SvelteComponent<ChatEditBrokenProps> {}
