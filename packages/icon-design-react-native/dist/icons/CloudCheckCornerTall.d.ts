import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudCheckCornerTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudCheckCornerTall: ForwardRefExoticComponent<CloudCheckCornerTallProps & RefAttributes<Svg>>;

export default CloudCheckCornerTall;
export { CloudCheckCornerTall };
