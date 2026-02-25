import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface IInformation32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const IInformation32: ForwardRefExoticComponent<IInformation32Props & RefAttributes<SVGSVGElement>>;

export default IInformation32;
export { IInformation32 };
