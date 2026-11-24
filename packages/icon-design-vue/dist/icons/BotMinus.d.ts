import type { DefineComponent } from 'vue';

export interface BotMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BotMinus: DefineComponent<BotMinusProps>;

export default BotMinus;
export { BotMinus };
