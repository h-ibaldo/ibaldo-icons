import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtAlertBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtAlertBoxy: ForwardRefExoticComponent<AtAlertBoxyProps & RefAttributes<Svg>>;

export default AtAlertBoxy;
export { AtAlertBoxy };
