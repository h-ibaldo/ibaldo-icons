import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MobileProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Mobile: ForwardRefExoticComponent<MobileProps & RefAttributes<Svg>>;

export default Mobile;
export { Mobile };
