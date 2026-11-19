import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BagSmileProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BagSmile: ForwardRefExoticComponent<BagSmileProps & RefAttributes<Svg>>;

export default BagSmile;
export { BagSmile };
