import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextKProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextK: ForwardRefExoticComponent<TextKProps & RefAttributes<SVGSVGElement>>;

export default TextK;
export { TextK };
