import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrainSettingsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrainSettings: ForwardRefExoticComponent<BrainSettingsProps & RefAttributes<Svg>>;

export default BrainSettings;
export { BrainSettings };
