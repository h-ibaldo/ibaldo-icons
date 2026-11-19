import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EyeSquareDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EyeSquareDot: ForwardRefExoticComponent<EyeSquareDotProps & RefAttributes<Svg>>;

export default EyeSquareDot;
export { EyeSquareDot };
