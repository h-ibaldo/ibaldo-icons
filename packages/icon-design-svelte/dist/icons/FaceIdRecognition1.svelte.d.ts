import { SvelteComponent } from 'svelte';

export interface FaceIdRecognition1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FaceIdRecognition1 extends SvelteComponent<FaceIdRecognition1Props> {}
