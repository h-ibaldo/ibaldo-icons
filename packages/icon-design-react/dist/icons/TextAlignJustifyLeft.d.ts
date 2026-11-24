import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextAlignJustifyLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextAlignJustifyLeft: ForwardRefExoticComponent<TextAlignJustifyLeftProps & RefAttributes<SVGSVGElement>>;

export default TextAlignJustifyLeft;
export { TextAlignJustifyLeft };
