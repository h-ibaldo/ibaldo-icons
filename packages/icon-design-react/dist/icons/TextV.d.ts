import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextVProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextV: ForwardRefExoticComponent<TextVProps & RefAttributes<SVGSVGElement>>;

export default TextV;
export { TextV };
