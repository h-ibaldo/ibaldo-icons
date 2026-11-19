import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CursorSquareDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CursorSquareDashed: ForwardRefExoticComponent<CursorSquareDashedProps & RefAttributes<Svg>>;

export default CursorSquareDashed;
export { CursorSquareDashed };
