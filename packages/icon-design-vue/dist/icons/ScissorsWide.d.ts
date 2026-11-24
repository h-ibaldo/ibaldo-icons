import type { DefineComponent } from 'vue';

export interface ScissorsWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScissorsWide: DefineComponent<ScissorsWideProps>;

export default ScissorsWide;
export { ScissorsWide };
