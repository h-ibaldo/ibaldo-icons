import { SvelteComponent } from 'svelte';

export interface MusicNoteProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MusicNote extends SvelteComponent<MusicNoteProps> {}
