import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabCheckCircleStepProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabCheckCircleStep: ForwardRefExoticComponent<TabCheckCircleStepProps & RefAttributes<Svg>>;

export default TabCheckCircleStep;
export { TabCheckCircleStep };
