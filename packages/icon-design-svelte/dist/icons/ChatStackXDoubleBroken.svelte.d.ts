import { SvelteComponent } from 'svelte';

export interface ChatStackXDoubleBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackXDoubleBroken extends SvelteComponent<ChatStackXDoubleBrokenProps> {}
