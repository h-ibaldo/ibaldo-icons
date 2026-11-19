import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabStepProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabStep: ForwardRefExoticComponent<TabStepProps & RefAttributes<Svg>>;

export default TabStep;
export { TabStep };
