import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EyeOffLargePupilProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EyeOffLargePupil: ForwardRefExoticComponent<EyeOffLargePupilProps & RefAttributes<Svg>>;

export default EyeOffLargePupil;
export { EyeOffLargePupil };
