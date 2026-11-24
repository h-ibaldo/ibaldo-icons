import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EyeOffShineProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EyeOffShine: ForwardRefExoticComponent<EyeOffShineProps & RefAttributes<Svg>>;

export default EyeOffShine;
export { EyeOffShine };
