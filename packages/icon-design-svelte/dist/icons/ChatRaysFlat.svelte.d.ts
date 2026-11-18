import { SvelteComponent } from 'svelte';

export interface ChatRaysFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatRaysFlat extends SvelteComponent<ChatRaysFlatProps> {}
