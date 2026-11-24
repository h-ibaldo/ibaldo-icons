import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabArrowLeftXStepProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabArrowLeftXStep: ForwardRefExoticComponent<TabArrowLeftXStepProps & RefAttributes<Svg>>;

export default TabArrowLeftXStep;
export { TabArrowLeftXStep };
