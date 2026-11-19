import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellCheckFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellCheckFlat: ForwardRefExoticComponent<BellCheckFlatProps & RefAttributes<Svg>>;

export default BellCheckFlat;
export { BellCheckFlat };
