import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StarStripedWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StarStripedWide: ForwardRefExoticComponent<StarStripedWideProps & RefAttributes<Svg>>;

export default StarStripedWide;
export { StarStripedWide };
