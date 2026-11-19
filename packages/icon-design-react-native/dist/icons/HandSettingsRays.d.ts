import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandSettingsRaysProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandSettingsRays: ForwardRefExoticComponent<HandSettingsRaysProps & RefAttributes<Svg>>;

export default HandSettingsRays;
export { HandSettingsRays };
