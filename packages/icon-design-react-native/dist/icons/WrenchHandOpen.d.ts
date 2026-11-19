import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WrenchHandOpenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WrenchHandOpen: ForwardRefExoticComponent<WrenchHandOpenProps & RefAttributes<Svg>>;

export default WrenchHandOpen;
export { WrenchHandOpen };
