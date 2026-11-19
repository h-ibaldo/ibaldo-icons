import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellOffWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellOffWide: ForwardRefExoticComponent<BellOffWideProps & RefAttributes<Svg>>;

export default BellOffWide;
export { BellOffWide };
