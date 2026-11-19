import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudHappyTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudHappyTall: ForwardRefExoticComponent<CloudHappyTallProps & RefAttributes<Svg>>;

export default CloudHappyTall;
export { CloudHappyTall };
