import type { DefineComponent } from 'vue';

export interface TabCheckCenterStepProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabCheckCenterStep: DefineComponent<TabCheckCenterStepProps>;

export default TabCheckCenterStep;
export { TabCheckCenterStep };
