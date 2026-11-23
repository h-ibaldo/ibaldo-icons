import type { DefineComponent } from 'vue';

export interface BotXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BotX: DefineComponent<BotXProps>;

export default BotX;
export { BotX };
