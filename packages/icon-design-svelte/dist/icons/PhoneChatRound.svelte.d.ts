import { SvelteComponent } from 'svelte';

export interface PhoneChatRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneChatRound extends SvelteComponent<PhoneChatRoundProps> {}
