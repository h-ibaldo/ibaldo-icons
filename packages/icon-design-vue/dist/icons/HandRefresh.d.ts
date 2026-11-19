import type { DefineComponent } from 'vue';

export interface HandRefreshProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandRefresh: DefineComponent<HandRefreshProps>;

export default HandRefresh;
export { HandRefresh };
