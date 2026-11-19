import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearSpokesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearSpokes: ForwardRefExoticComponent<GearSpokesProps & RefAttributes<Svg>>;

export default GearSpokes;
export { GearSpokes };
