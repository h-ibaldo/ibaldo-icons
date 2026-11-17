import { SvelteComponent } from 'svelte';

export interface AvatarFaceSpikySideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceSpikySide extends SvelteComponent<AvatarFaceSpikySideProps> {}
