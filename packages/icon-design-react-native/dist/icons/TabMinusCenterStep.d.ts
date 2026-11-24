import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabMinusCenterStepProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabMinusCenterStep: ForwardRefExoticComponent<TabMinusCenterStepProps & RefAttributes<Svg>>;

export default TabMinusCenterStep;
export { TabMinusCenterStep };
