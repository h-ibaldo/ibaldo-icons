import { SvelteComponent } from 'svelte';

export interface AvatarHeadSpikySideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadSpikySide extends SvelteComponent<AvatarHeadSpikySideProps> {}
