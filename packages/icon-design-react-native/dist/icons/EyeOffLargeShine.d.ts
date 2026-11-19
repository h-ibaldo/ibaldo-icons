import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EyeOffLargeShineProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EyeOffLargeShine: ForwardRefExoticComponent<EyeOffLargeShineProps & RefAttributes<Svg>>;

export default EyeOffLargeShine;
export { EyeOffLargeShine };
