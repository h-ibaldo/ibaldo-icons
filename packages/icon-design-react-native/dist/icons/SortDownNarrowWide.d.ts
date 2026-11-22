import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SortDownNarrowWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SortDownNarrowWide: ForwardRefExoticComponent<SortDownNarrowWideProps & RefAttributes<Svg>>;

export default SortDownNarrowWide;
export { SortDownNarrowWide };
