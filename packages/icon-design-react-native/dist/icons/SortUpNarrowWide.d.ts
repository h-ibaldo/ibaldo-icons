import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SortUpNarrowWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SortUpNarrowWide: ForwardRefExoticComponent<SortUpNarrowWideProps & RefAttributes<Svg>>;

export default SortUpNarrowWide;
export { SortUpNarrowWide };
