import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnUp: ForwardRefExoticComponent<ArrowUturnUpProps & RefAttributes<Svg>>;

export default ArrowUturnUp;
export { ArrowUturnUp };
