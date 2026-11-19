import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipCircleArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipCircleArrowRight: ForwardRefExoticComponent<PaperclipCircleArrowRightProps & RefAttributes<Svg>>;

export default PaperclipCircleArrowRight;
export { PaperclipCircleArrowRight };
