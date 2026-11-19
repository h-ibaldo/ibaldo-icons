import type { DefineComponent } from 'vue';

export interface TabXCenterStepProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabXCenterStep: DefineComponent<TabXCenterStepProps>;

export default TabXCenterStep;
export { TabXCenterStep };
