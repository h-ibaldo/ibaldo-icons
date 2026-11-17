import { SvelteComponent } from 'svelte';

export interface FaceID4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FaceID4 extends SvelteComponent<FaceID4Props> {}
