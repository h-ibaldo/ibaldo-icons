import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CodeCheckSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CodeCheckSmall: ForwardRefExoticComponent<CodeCheckSmallProps & RefAttributes<SVGSVGElement>>;

export default CodeCheckSmall;
export { CodeCheckSmall };
