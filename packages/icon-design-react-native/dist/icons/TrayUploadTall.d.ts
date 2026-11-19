import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrayUploadTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrayUploadTall: ForwardRefExoticComponent<TrayUploadTallProps & RefAttributes<Svg>>;

export default TrayUploadTall;
export { TrayUploadTall };
