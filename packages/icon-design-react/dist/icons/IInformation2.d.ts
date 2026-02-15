import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface IInformation2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const IInformation2: ForwardRefExoticComponent<IInformation2Props & RefAttributes<SVGSVGElement>>;

export default IInformation2;
export { IInformation2 };
