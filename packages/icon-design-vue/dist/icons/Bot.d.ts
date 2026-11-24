import type { DefineComponent } from 'vue';

export interface BotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Bot: DefineComponent<BotProps>;

export default Bot;
export { Bot };
