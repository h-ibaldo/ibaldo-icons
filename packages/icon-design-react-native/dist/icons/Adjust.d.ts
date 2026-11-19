import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AdjustProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Adjust: ForwardRefExoticComponent<AdjustProps & RefAttributes<Svg>>;

export default Adjust;
export { Adjust };
