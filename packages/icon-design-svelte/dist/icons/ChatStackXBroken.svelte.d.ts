import { SvelteComponent } from 'svelte';

export interface ChatStackXBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackXBroken extends SvelteComponent<ChatStackXBrokenProps> {}
