import type { DefineComponent } from 'vue';

export interface TabCheckCircleStepProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabCheckCircleStep: DefineComponent<TabCheckCircleStepProps>;

export default TabCheckCircleStep;
export { TabCheckCircleStep };
