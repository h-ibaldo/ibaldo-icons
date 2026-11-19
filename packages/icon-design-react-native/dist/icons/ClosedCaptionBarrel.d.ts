import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClosedCaptionBarrelProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClosedCaptionBarrel: ForwardRefExoticComponent<ClosedCaptionBarrelProps & RefAttributes<Svg>>;

export default ClosedCaptionBarrel;
export { ClosedCaptionBarrel };
