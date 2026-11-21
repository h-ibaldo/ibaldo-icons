import type { DefineComponent } from 'vue';

export interface DatabaseRefreshProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DatabaseRefresh: DefineComponent<DatabaseRefreshProps>;

export default DatabaseRefresh;
export { DatabaseRefresh };
