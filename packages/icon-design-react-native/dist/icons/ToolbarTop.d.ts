import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ToolbarTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ToolbarTop: ForwardRefExoticComponent<ToolbarTopProps & RefAttributes<Svg>>;

export default ToolbarTop;
export { ToolbarTop };
