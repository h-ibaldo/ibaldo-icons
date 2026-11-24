import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UsbProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Usb: ForwardRefExoticComponent<UsbProps & RefAttributes<Svg>>;

export default Usb;
export { Usb };
