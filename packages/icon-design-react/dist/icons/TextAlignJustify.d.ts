import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextAlignJustifyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextAlignJustify: ForwardRefExoticComponent<TextAlignJustifyProps & RefAttributes<SVGSVGElement>>;

export default TextAlignJustify;
export { TextAlignJustify };
