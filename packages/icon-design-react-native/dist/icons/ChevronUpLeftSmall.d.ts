import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronUpLeftSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronUpLeftSmall: ForwardRefExoticComponent<ChevronUpLeftSmallProps & RefAttributes<Svg>>;

export default ChevronUpLeftSmall;
export { ChevronUpLeftSmall };
