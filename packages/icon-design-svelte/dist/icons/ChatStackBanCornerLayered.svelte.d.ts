import { SvelteComponent } from 'svelte';

export interface ChatStackBanCornerLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackBanCornerLayered extends SvelteComponent<ChatStackBanCornerLayeredProps> {}
