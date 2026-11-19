import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClosedCaptionSquareWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClosedCaptionSquareWide: ForwardRefExoticComponent<ClosedCaptionSquareWideProps & RefAttributes<Svg>>;

export default ClosedCaptionSquareWide;
export { ClosedCaptionSquareWide };
