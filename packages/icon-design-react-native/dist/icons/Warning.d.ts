import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WarningProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Warning: ForwardRefExoticComponent<WarningProps & RefAttributes<Svg>>;

export default Warning;
export { Warning };
