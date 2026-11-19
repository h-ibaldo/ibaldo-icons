import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtAlertTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtAlertTall: ForwardRefExoticComponent<AtAlertTallProps & RefAttributes<Svg>>;

export default AtAlertTall;
export { AtAlertTall };
