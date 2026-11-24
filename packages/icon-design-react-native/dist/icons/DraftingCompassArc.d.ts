import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DraftingCompassArcProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DraftingCompassArc: ForwardRefExoticComponent<DraftingCompassArcProps & RefAttributes<Svg>>;

export default DraftingCompassArc;
export { DraftingCompassArc };
