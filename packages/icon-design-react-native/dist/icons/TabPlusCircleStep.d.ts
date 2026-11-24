import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabPlusCircleStepProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabPlusCircleStep: ForwardRefExoticComponent<TabPlusCircleStepProps & RefAttributes<Svg>>;

export default TabPlusCircleStep;
export { TabPlusCircleStep };
