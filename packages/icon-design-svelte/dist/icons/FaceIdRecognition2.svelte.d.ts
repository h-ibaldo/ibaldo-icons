import { SvelteComponent } from 'svelte';

export interface FaceIdRecognition2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FaceIdRecognition2 extends SvelteComponent<FaceIdRecognition2Props> {}
