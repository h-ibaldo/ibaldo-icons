import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowListCheckCirclePlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowListCheckCirclePlain: ForwardRefExoticComponent<WindowListCheckCirclePlainProps & RefAttributes<Svg>>;

export default WindowListCheckCirclePlain;
export { WindowListCheckCirclePlain };
