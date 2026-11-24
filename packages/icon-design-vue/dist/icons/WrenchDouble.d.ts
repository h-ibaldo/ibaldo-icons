import type { DefineComponent } from 'vue';

export interface WrenchDoubleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WrenchDouble: DefineComponent<WrenchDoubleProps>;

export default WrenchDouble;
export { WrenchDouble };
