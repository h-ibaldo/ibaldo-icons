import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabArrowRightXStepProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabArrowRightXStep: ForwardRefExoticComponent<TabArrowRightXStepProps & RefAttributes<Svg>>;

export default TabArrowRightXStep;
export { TabArrowRightXStep };
