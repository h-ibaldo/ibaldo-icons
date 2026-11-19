import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WarningOffSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WarningOffSmall: ForwardRefExoticComponent<WarningOffSmallProps & RefAttributes<Svg>>;

export default WarningOffSmall;
export { WarningOffSmall };
