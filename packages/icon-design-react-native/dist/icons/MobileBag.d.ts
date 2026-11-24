import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MobileBagProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MobileBag: ForwardRefExoticComponent<MobileBagProps & RefAttributes<Svg>>;

export default MobileBag;
export { MobileBag };
