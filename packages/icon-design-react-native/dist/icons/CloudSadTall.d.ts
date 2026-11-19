import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudSadTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudSadTall: ForwardRefExoticComponent<CloudSadTallProps & RefAttributes<Svg>>;

export default CloudSadTall;
export { CloudSadTall };
