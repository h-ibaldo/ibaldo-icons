import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabPlusCenterStepProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabPlusCenterStep: ForwardRefExoticComponent<TabPlusCenterStepProps & RefAttributes<Svg>>;

export default TabPlusCenterStep;
export { TabPlusCenterStep };
