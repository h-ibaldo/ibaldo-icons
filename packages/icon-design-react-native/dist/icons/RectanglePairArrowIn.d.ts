import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RectanglePairArrowInProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RectanglePairArrowIn: ForwardRefExoticComponent<RectanglePairArrowInProps & RefAttributes<Svg>>;

export default RectanglePairArrowIn;
export { RectanglePairArrowIn };
