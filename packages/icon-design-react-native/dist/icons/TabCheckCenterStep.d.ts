import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabCheckCenterStepProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabCheckCenterStep: ForwardRefExoticComponent<TabCheckCenterStepProps & RefAttributes<Svg>>;

export default TabCheckCenterStep;
export { TabCheckCenterStep };
