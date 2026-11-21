import type { DefineComponent } from 'vue';

export interface ScissorsClosedWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScissorsClosedWide: DefineComponent<ScissorsClosedWideProps>;

export default ScissorsClosedWide;
export { ScissorsClosedWide };
