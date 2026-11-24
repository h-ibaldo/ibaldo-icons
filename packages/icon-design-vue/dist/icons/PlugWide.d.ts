import type { DefineComponent } from 'vue';

export interface PlugWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PlugWide: DefineComponent<PlugWideProps>;

export default PlugWide;
export { PlugWide };
