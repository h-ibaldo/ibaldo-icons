import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkSplitSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkSplitSquare: ForwardRefExoticComponent<LinkSplitSquareProps & RefAttributes<Svg>>;

export default LinkSplitSquare;
export { LinkSplitSquare };
