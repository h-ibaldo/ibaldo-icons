import type { DefineComponent } from 'vue';

export interface WrenchHandProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WrenchHand: DefineComponent<WrenchHandProps>;

export default WrenchHand;
export { WrenchHand };
