import type { DefineComponent } from 'vue';

export interface TabXStepProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabXStep: DefineComponent<TabXStepProps>;

export default TabXStep;
export { TabXStep };
