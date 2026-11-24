import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextHProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextH: ForwardRefExoticComponent<TextHProps & RefAttributes<SVGSVGElement>>;

export default TextH;
export { TextH };
