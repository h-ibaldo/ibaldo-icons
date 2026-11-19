import type { DefineComponent } from 'vue';

export interface SupportOvalMicProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SupportOvalMic: DefineComponent<SupportOvalMicProps>;

export default SupportOvalMic;
export { SupportOvalMic };
