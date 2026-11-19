import type { DefineComponent } from 'vue';

export interface DashboardProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Dashboard: DefineComponent<DashboardProps>;

export default Dashboard;
export { Dashboard };
