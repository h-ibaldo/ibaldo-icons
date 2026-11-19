import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudXCornerTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudXCornerTall: ForwardRefExoticComponent<CloudXCornerTallProps & RefAttributes<Svg>>;

export default CloudXCornerTall;
export { CloudXCornerTall };
