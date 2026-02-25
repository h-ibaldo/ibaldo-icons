import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NewspaperNews42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NewspaperNews42: ForwardRefExoticComponent<NewspaperNews42Props & RefAttributes<SVGSVGElement>>;

export default NewspaperNews42;
export { NewspaperNews42 };
