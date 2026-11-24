import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PlusSquareDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PlusSquareDot: ForwardRefExoticComponent<PlusSquareDotProps & RefAttributes<Svg>>;

export default PlusSquareDot;
export { PlusSquareDot };
