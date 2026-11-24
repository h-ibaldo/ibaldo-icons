import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BorderRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BorderRight: ForwardRefExoticComponent<BorderRightProps & RefAttributes<Svg>>;

export default BorderRight;
export { BorderRight };
