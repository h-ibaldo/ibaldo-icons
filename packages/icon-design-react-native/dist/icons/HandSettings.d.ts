import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandSettingsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandSettings: ForwardRefExoticComponent<HandSettingsProps & RefAttributes<Svg>>;

export default HandSettings;
export { HandSettings };
