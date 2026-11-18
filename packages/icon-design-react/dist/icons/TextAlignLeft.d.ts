import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextAlignLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextAlignLeft: ForwardRefExoticComponent<TextAlignLeftProps & RefAttributes<SVGSVGElement>>;

export default TextAlignLeft;
export { TextAlignLeft };
