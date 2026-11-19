import type { DefineComponent } from 'vue';

export interface DashboardSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DashboardSharp: DefineComponent<DashboardSharpProps>;

export default DashboardSharp;
export { DashboardSharp };
