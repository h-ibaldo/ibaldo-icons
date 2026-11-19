import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LaptopSettingsFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LaptopSettingsFlat: ForwardRefExoticComponent<LaptopSettingsFlatProps & RefAttributes<Svg>>;

export default LaptopSettingsFlat;
export { LaptopSettingsFlat };
