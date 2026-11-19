import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ReplaceCirclesVerticalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ReplaceCirclesVertical: ForwardRefExoticComponent<ReplaceCirclesVerticalProps & RefAttributes<Svg>>;

export default ReplaceCirclesVertical;
export { ReplaceCirclesVertical };
