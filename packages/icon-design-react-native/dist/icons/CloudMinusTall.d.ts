import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudMinusTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudMinusTall: ForwardRefExoticComponent<CloudMinusTallProps & RefAttributes<Svg>>;

export default CloudMinusTall;
export { CloudMinusTall };
