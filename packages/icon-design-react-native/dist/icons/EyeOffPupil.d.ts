import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EyeOffPupilProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EyeOffPupil: ForwardRefExoticComponent<EyeOffPupilProps & RefAttributes<Svg>>;

export default EyeOffPupil;
export { EyeOffPupil };
