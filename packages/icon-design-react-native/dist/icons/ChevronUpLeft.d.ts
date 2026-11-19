import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronUpLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronUpLeft: ForwardRefExoticComponent<ChevronUpLeftProps & RefAttributes<Svg>>;

export default ChevronUpLeft;
export { ChevronUpLeft };
