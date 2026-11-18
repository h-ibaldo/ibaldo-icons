import { SvelteComponent } from 'svelte';

export interface ChatCheckDoubleBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckDoubleBroken extends SvelteComponent<ChatCheckDoubleBrokenProps> {}
