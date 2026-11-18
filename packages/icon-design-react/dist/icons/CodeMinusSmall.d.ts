import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CodeMinusSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CodeMinusSmall: ForwardRefExoticComponent<CodeMinusSmallProps & RefAttributes<SVGSVGElement>>;

export default CodeMinusSmall;
export { CodeMinusSmall };
