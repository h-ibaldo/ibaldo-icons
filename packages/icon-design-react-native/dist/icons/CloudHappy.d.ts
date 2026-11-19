import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudHappyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudHappy: ForwardRefExoticComponent<CloudHappyProps & RefAttributes<Svg>>;

export default CloudHappy;
export { CloudHappy };
