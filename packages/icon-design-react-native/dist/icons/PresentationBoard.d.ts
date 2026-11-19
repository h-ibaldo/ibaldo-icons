import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PresentationBoardProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PresentationBoard: ForwardRefExoticComponent<PresentationBoardProps & RefAttributes<Svg>>;

export default PresentationBoard;
export { PresentationBoard };
