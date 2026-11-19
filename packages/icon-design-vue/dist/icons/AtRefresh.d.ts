import type { DefineComponent } from 'vue';

export interface AtRefreshProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtRefresh: DefineComponent<AtRefreshProps>;

export default AtRefresh;
export { AtRefresh };
