import type { DefineComponent } from 'vue';

export interface BotVisorProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BotVisor: DefineComponent<BotVisorProps>;

export default BotVisor;
export { BotVisor };
