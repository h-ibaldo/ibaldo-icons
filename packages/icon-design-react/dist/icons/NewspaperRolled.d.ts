import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NewspaperRolledProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NewspaperRolled: ForwardRefExoticComponent<NewspaperRolledProps & RefAttributes<SVGSVGElement>>;

export default NewspaperRolled;
export { NewspaperRolled };
