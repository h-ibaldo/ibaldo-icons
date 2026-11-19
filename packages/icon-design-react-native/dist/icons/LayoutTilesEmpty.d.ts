import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayoutTilesEmptyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayoutTilesEmpty: ForwardRefExoticComponent<LayoutTilesEmptyProps & RefAttributes<Svg>>;

export default LayoutTilesEmpty;
export { LayoutTilesEmpty };
