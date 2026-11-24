import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayoutListLinesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayoutListLines: ForwardRefExoticComponent<LayoutListLinesProps & RefAttributes<Svg>>;

export default LayoutListLines;
export { LayoutListLines };
