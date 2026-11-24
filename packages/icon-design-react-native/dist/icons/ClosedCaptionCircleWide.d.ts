import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClosedCaptionCircleWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClosedCaptionCircleWide: ForwardRefExoticComponent<ClosedCaptionCircleWideProps & RefAttributes<Svg>>;

export default ClosedCaptionCircleWide;
export { ClosedCaptionCircleWide };
