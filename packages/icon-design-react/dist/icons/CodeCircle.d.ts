import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CodeCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CodeCircle: ForwardRefExoticComponent<CodeCircleProps & RefAttributes<SVGSVGElement>>;

export default CodeCircle;
export { CodeCircle };
