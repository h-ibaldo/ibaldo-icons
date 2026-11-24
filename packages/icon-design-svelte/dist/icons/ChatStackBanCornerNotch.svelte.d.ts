import { SvelteComponent } from 'svelte';

export interface ChatStackBanCornerNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackBanCornerNotch extends SvelteComponent<ChatStackBanCornerNotchProps> {}
