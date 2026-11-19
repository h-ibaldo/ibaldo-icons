import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchSpreadProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchSpread: ForwardRefExoticComponent<TouchSpreadProps & RefAttributes<Svg>>;

export default TouchSpread;
export { TouchSpread };
