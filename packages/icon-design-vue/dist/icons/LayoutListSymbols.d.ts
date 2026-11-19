import type { DefineComponent } from 'vue';

export interface LayoutListSymbolsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayoutListSymbols: DefineComponent<LayoutListSymbolsProps>;

export default LayoutListSymbols;
export { LayoutListSymbols };
