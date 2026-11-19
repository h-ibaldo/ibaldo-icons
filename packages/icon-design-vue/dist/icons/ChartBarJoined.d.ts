import type { DefineComponent } from 'vue';

export interface ChartBarJoinedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarJoined: DefineComponent<ChartBarJoinedProps>;

export default ChartBarJoined;
export { ChartBarJoined };
