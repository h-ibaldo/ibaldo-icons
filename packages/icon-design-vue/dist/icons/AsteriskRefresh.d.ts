import type { DefineComponent } from 'vue';

export interface AsteriskRefreshProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AsteriskRefresh: DefineComponent<AsteriskRefreshProps>;

export default AsteriskRefresh;
export { AsteriskRefresh };
