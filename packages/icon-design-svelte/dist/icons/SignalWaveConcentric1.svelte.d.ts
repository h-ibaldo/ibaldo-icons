import { SvelteComponent } from 'svelte';

export interface SignalWaveConcentric1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SignalWaveConcentric1 extends SvelteComponent<SignalWaveConcentric1Props> {}
