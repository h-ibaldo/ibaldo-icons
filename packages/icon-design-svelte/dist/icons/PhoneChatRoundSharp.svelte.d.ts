import { SvelteComponent } from 'svelte';

export interface PhoneChatRoundSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneChatRoundSharp extends SvelteComponent<PhoneChatRoundSharpProps> {}
