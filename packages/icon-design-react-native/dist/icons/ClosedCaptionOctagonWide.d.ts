import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClosedCaptionOctagonWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClosedCaptionOctagonWide: ForwardRefExoticComponent<ClosedCaptionOctagonWideProps & RefAttributes<Svg>>;

export default ClosedCaptionOctagonWide;
export { ClosedCaptionOctagonWide };
