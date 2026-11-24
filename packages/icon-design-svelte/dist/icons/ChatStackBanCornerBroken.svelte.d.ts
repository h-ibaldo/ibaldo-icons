import { SvelteComponent } from 'svelte';

export interface ChatStackBanCornerBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackBanCornerBroken extends SvelteComponent<ChatStackBanCornerBrokenProps> {}
