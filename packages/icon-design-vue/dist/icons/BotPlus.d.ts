import type { DefineComponent } from 'vue';

export interface BotPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BotPlus: DefineComponent<BotPlusProps>;

export default BotPlus;
export { BotPlus };
