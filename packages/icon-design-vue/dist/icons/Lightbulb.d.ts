import type { DefineComponent } from 'vue';

export interface LightbulbProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Lightbulb: DefineComponent<LightbulbProps>;

export default Lightbulb;
export { Lightbulb };
