import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GiftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Gift: ForwardRefExoticComponent<GiftProps & RefAttributes<Svg>>;

export default Gift;
export { Gift };
