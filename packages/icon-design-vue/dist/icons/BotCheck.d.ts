import type { DefineComponent } from 'vue';

export interface BotCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BotCheck: DefineComponent<BotCheckProps>;

export default BotCheck;
export { BotCheck };
