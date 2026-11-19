import type { DefineComponent } from 'vue';

export interface DashboardSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DashboardSquare: DefineComponent<DashboardSquareProps>;

export default DashboardSquare;
export { DashboardSquare };
