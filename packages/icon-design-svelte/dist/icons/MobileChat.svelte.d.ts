import { SvelteComponent } from 'svelte';

export interface MobileChatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MobileChat extends SvelteComponent<MobileChatProps> {}
