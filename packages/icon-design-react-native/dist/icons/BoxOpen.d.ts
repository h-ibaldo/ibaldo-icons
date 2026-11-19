import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoxOpenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoxOpen: ForwardRefExoticComponent<BoxOpenProps & RefAttributes<Svg>>;

export default BoxOpen;
export { BoxOpen };
