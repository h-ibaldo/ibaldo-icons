import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextKCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextKCircle: ForwardRefExoticComponent<TextKCircleProps & RefAttributes<SVGSVGElement>>;

export default TextKCircle;
export { TextKCircle };
