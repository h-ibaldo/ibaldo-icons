import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScissorsClosedWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScissorsClosedWide: ForwardRefExoticComponent<ScissorsClosedWideProps & RefAttributes<Svg>>;

export default ScissorsClosedWide;
export { ScissorsClosedWide };
