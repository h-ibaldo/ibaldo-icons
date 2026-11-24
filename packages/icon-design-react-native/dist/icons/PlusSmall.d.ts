import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PlusSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PlusSmall: ForwardRefExoticComponent<PlusSmallProps & RefAttributes<Svg>>;

export default PlusSmall;
export { PlusSmall };
