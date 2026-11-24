import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayoutTilesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayoutTiles: ForwardRefExoticComponent<LayoutTilesProps & RefAttributes<Svg>>;

export default LayoutTiles;
export { LayoutTiles };
