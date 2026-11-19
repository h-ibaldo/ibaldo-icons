import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SupportProfileProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SupportProfile: ForwardRefExoticComponent<SupportProfileProps & RefAttributes<Svg>>;

export default SupportProfile;
export { SupportProfile };
