import type { DefineComponent } from 'vue';

export interface AtRefreshTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtRefreshTall: DefineComponent<AtRefreshTallProps>;

export default AtRefreshTall;
export { AtRefreshTall };
