import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronDoubleRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronDoubleRight: ForwardRefExoticComponent<ChevronDoubleRightProps & RefAttributes<Svg>>;

export default ChevronDoubleRight;
export { ChevronDoubleRight };
