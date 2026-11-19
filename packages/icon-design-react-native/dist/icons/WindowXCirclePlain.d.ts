import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowXCirclePlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowXCirclePlain: ForwardRefExoticComponent<WindowXCirclePlainProps & RefAttributes<Svg>>;

export default WindowXCirclePlain;
export { WindowXCirclePlain };
