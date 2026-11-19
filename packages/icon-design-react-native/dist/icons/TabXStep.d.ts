import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabXStepProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabXStep: ForwardRefExoticComponent<TabXStepProps & RefAttributes<Svg>>;

export default TabXStep;
export { TabXStep };
