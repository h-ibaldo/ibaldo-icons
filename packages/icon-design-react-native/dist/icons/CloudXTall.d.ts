import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudXTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudXTall: ForwardRefExoticComponent<CloudXTallProps & RefAttributes<Svg>>;

export default CloudXTall;
export { CloudXTall };
