import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SparklePlusDotPointedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SparklePlusDotPointed: ForwardRefExoticComponent<SparklePlusDotPointedProps & RefAttributes<Svg>>;

export default SparklePlusDotPointed;
export { SparklePlusDotPointed };
