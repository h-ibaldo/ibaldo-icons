import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipCheckVerticalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipCheckVertical: ForwardRefExoticComponent<PaperclipCheckVerticalProps & RefAttributes<Svg>>;

export default PaperclipCheckVertical;
export { PaperclipCheckVertical };
