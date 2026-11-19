import type { DefineComponent } from 'vue';

export interface TabXCircleStepProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabXCircleStep: DefineComponent<TabXCircleStepProps>;

export default TabXCircleStep;
export { TabXCircleStep };
