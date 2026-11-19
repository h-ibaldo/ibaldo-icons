import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SortTwoOneDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SortTwoOneDown: ForwardRefExoticComponent<SortTwoOneDownProps & RefAttributes<Svg>>;

export default SortTwoOneDown;
export { SortTwoOneDown };
