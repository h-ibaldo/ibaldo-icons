import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EyePupilProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EyePupil: ForwardRefExoticComponent<EyePupilProps & RefAttributes<Svg>>;

export default EyePupil;
export { EyePupil };
