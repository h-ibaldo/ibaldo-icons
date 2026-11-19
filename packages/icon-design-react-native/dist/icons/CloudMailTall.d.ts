import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudMailTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudMailTall: ForwardRefExoticComponent<CloudMailTallProps & RefAttributes<Svg>>;

export default CloudMailTall;
export { CloudMailTall };
