import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EyeShineProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EyeShine: ForwardRefExoticComponent<EyeShineProps & RefAttributes<Svg>>;

export default EyeShine;
export { EyeShine };
