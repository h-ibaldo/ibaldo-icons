import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabCheckStepProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabCheckStep: ForwardRefExoticComponent<TabCheckStepProps & RefAttributes<Svg>>;

export default TabCheckStep;
export { TabCheckStep };
