import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface IInformation3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const IInformation3: ForwardRefExoticComponent<IInformation3Props & RefAttributes<SVGSVGElement>>;

export default IInformation3;
export { IInformation3 };
