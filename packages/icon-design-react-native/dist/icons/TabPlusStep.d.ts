import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabPlusStepProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabPlusStep: ForwardRefExoticComponent<TabPlusStepProps & RefAttributes<Svg>>;

export default TabPlusStep;
export { TabPlusStep };
