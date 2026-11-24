import { SvelteComponent } from 'svelte';

export interface ChatTextRaysFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTextRaysFlat extends SvelteComponent<ChatTextRaysFlatProps> {}
