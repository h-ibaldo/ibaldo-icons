import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BagTaperedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BagTapered: ForwardRefExoticComponent<BagTaperedProps & RefAttributes<Svg>>;

export default BagTapered;
export { BagTapered };
