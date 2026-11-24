import { SvelteComponent } from 'svelte';

export interface BookOpenWaveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookOpenWave extends SvelteComponent<BookOpenWaveProps> {}
