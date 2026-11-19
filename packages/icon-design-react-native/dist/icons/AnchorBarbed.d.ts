import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AnchorBarbedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AnchorBarbed: ForwardRefExoticComponent<AnchorBarbedProps & RefAttributes<Svg>>;

export default AnchorBarbed;
export { AnchorBarbed };
