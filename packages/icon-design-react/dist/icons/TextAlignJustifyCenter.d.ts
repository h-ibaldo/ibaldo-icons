import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextAlignJustifyCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextAlignJustifyCenter: ForwardRefExoticComponent<TextAlignJustifyCenterProps & RefAttributes<SVGSVGElement>>;

export default TextAlignJustifyCenter;
export { TextAlignJustifyCenter };
