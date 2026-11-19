import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardPageProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardPage: ForwardRefExoticComponent<ClipboardPageProps & RefAttributes<Svg>>;

export default ClipboardPage;
export { ClipboardPage };
