import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareDashed: ForwardRefExoticComponent<SquareDashedProps & RefAttributes<Svg>>;

export default SquareDashed;
export { SquareDashed };
