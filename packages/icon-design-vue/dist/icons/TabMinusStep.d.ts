import type { DefineComponent } from 'vue';

export interface TabMinusStepProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabMinusStep: DefineComponent<TabMinusStepProps>;

export default TabMinusStep;
export { TabMinusStep };
