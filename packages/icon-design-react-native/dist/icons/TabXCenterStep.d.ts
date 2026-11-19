import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabXCenterStepProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabXCenterStep: ForwardRefExoticComponent<TabXCenterStepProps & RefAttributes<Svg>>;

export default TabXCenterStep;
export { TabXCenterStep };
