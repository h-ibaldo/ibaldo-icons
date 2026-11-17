import { SvelteComponent } from 'svelte';

export interface FaceID3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FaceID3 extends SvelteComponent<FaceID3Props> {}
