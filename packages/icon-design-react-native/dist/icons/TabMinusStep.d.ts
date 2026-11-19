import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabMinusStepProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabMinusStep: ForwardRefExoticComponent<TabMinusStepProps & RefAttributes<Svg>>;

export default TabMinusStep;
export { TabMinusStep };
