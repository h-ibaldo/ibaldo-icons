import { SvelteComponent } from 'svelte';

export interface ChatCheckBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckBroken extends SvelteComponent<ChatCheckBrokenProps> {}
