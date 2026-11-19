import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearDownloadAngledProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearDownloadAngled: ForwardRefExoticComponent<GearDownloadAngledProps & RefAttributes<Svg>>;

export default GearDownloadAngled;
export { GearDownloadAngled };
