import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudAlertTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudAlertTall: ForwardRefExoticComponent<CloudAlertTallProps & RefAttributes<Svg>>;

export default CloudAlertTall;
export { CloudAlertTall };
