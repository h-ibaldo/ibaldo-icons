import type { DefineComponent } from 'vue';

export interface BrowserRabbitProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserRabbit: DefineComponent<BrowserRabbitProps>;

export default BrowserRabbit;
export { BrowserRabbit };
