import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudTall: ForwardRefExoticComponent<CloudTallProps & RefAttributes<Svg>>;

export default CloudTall;
export { CloudTall };
