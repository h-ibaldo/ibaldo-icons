import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TriangleWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TriangleWide: ForwardRefExoticComponent<TriangleWideProps & RefAttributes<Svg>>;

export default TriangleWide;
export { TriangleWide };
