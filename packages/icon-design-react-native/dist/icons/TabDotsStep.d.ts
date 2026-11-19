import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabDotsStepProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabDotsStep: ForwardRefExoticComponent<TabDotsStepProps & RefAttributes<Svg>>;

export default TabDotsStep;
export { TabDotsStep };
