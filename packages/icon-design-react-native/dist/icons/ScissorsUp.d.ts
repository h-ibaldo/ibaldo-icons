import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScissorsUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScissorsUp: ForwardRefExoticComponent<ScissorsUpProps & RefAttributes<Svg>>;

export default ScissorsUp;
export { ScissorsUp };
