import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UsbPortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UsbPort: ForwardRefExoticComponent<UsbPortProps & RefAttributes<Svg>>;

export default UsbPort;
export { UsbPort };
