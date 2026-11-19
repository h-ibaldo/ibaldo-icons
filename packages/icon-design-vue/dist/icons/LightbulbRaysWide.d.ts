import type { DefineComponent } from 'vue';

export interface LightbulbRaysWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LightbulbRaysWide: DefineComponent<LightbulbRaysWideProps>;

export default LightbulbRaysWide;
export { LightbulbRaysWide };
