import type { DefineComponent } from 'vue';

export interface NoEntryProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NoEntry: DefineComponent<NoEntryProps>;

export default NoEntry;
export { NoEntry };
