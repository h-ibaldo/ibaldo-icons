import type { DefineComponent } from 'vue';

export interface TabCheckCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabCheckCircle: DefineComponent<TabCheckCircleProps>;

export default TabCheckCircle;
export { TabCheckCircle };
