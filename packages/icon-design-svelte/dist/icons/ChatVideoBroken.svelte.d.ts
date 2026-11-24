import { SvelteComponent } from 'svelte';

export interface ChatVideoBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatVideoBroken extends SvelteComponent<ChatVideoBrokenProps> {}
