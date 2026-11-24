import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RotateScreenTabRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RotateScreenTabRight: ForwardRefExoticComponent<RotateScreenTabRightProps & RefAttributes<Svg>>;

export default RotateScreenTabRight;
export { RotateScreenTabRight };
