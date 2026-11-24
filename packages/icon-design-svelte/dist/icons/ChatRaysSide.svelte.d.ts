import { SvelteComponent } from 'svelte';

export interface ChatRaysSideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatRaysSide extends SvelteComponent<ChatRaysSideProps> {}
