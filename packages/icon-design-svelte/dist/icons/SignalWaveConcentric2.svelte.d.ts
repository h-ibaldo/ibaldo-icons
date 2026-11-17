import { SvelteComponent } from 'svelte';

export interface SignalWaveConcentric2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SignalWaveConcentric2 extends SvelteComponent<SignalWaveConcentric2Props> {}
