import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCyclePlus2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCyclePlus2: ForwardRefExoticComponent<ArrowCyclePlus2Props & RefAttributes<Svg>>;

export default ArrowCyclePlus2;
export { ArrowCyclePlus2 };
