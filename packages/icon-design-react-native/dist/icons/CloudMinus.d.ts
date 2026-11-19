import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudMinus: ForwardRefExoticComponent<CloudMinusProps & RefAttributes<Svg>>;

export default CloudMinus;
export { CloudMinus };
