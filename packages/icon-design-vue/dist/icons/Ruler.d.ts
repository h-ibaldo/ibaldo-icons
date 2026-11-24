import type { DefineComponent } from 'vue';

export interface RulerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Ruler: DefineComponent<RulerProps>;

export default Ruler;
export { Ruler };
