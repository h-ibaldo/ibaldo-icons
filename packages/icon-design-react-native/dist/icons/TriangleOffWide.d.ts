import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TriangleOffWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TriangleOffWide: ForwardRefExoticComponent<TriangleOffWideProps & RefAttributes<Svg>>;

export default TriangleOffWide;
export { TriangleOffWide };
