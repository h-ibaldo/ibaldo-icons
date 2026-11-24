import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RotateScreenTabLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RotateScreenTabLeft: ForwardRefExoticComponent<RotateScreenTabLeftProps & RefAttributes<Svg>>;

export default RotateScreenTabLeft;
export { RotateScreenTabLeft };
