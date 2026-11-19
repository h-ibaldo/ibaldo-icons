import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudOffTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudOffTall: ForwardRefExoticComponent<CloudOffTallProps & RefAttributes<Svg>>;

export default CloudOffTall;
export { CloudOffTall };
