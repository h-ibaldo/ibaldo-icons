import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DocumentStackCodeShadowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DocumentStackCodeShadow: ForwardRefExoticComponent<DocumentStackCodeShadowProps & RefAttributes<Svg>>;

export default DocumentStackCodeShadow;
export { DocumentStackCodeShadow };
