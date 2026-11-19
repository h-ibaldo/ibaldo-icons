import type { DefineComponent } from 'vue';

export interface ChartBarJoinedBaseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarJoinedBase: DefineComponent<ChartBarJoinedBaseProps>;

export default ChartBarJoinedBase;
export { ChartBarJoinedBase };
