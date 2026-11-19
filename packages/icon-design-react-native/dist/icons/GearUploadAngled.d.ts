import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearUploadAngledProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearUploadAngled: ForwardRefExoticComponent<GearUploadAngledProps & RefAttributes<Svg>>;

export default GearUploadAngled;
export { GearUploadAngled };
