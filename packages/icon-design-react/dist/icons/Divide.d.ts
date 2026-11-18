import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DivideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Divide: ForwardRefExoticComponent<DivideProps & RefAttributes<SVGSVGElement>>;

export default Divide;
export { Divide };
