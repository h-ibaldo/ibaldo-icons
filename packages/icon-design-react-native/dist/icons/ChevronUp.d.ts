import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronUp: ForwardRefExoticComponent<ChevronUpProps & RefAttributes<Svg>>;

export default ChevronUp;
export { ChevronUp };
