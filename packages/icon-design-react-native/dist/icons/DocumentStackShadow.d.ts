import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DocumentStackShadowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DocumentStackShadow: ForwardRefExoticComponent<DocumentStackShadowProps & RefAttributes<Svg>>;

export default DocumentStackShadow;
export { DocumentStackShadow };
