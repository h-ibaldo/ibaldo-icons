import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudArrowRight: ForwardRefExoticComponent<CloudArrowRightProps & RefAttributes<Svg>>;

export default CloudArrowRight;
export { CloudArrowRight };
