import { SvelteComponent } from 'svelte';

export interface FaceIdRecognition3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FaceIdRecognition3 extends SvelteComponent<FaceIdRecognition3Props> {}
